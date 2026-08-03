const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Checks whether the user is logged in before allowing access
const protect = async (req, res, next) => {
    try {
        let token;

        // Check if token is sent in the Authorization header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        // If no token is found, deny access
        if (!token) {
            return res.status(401).json({
                message: "Not authorized. No token found.",
            });
        }

        // Verify that the token is valid and created by our server
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user using the ID stored inside the token
        req.user = await User.findById(decoded.id).select("-password");

        // Move to the next middleware or controller
        next();

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { protect };