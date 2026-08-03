const User = require("../models/User");    // we imported user.schema
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;   
        if (!name || !email || !password) {
            return res.status(400).json({             // Client sent invalid or incomplete data
                message: "Please fill all fields"
            });
        }

        // talking with mongo DB
        // check if user already exists
        const existingUser = await User.findOne({ email });  
        ///"Hey MongoDB, search the users collection for a document whose email field matches the email I received."
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists",
            });
        }
        // Create A User
        const user = await User.create({     // Stored In "user" for later use
            name,
            email,
            password,
        });
        
        const createdUser = await User.findById(user._id).select("-password");

        res.status(201).json({
            message: "User registered successfully",
            user: createdUser,  // displaying user data in response
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password are required",
            });
        }

        // Check if a user with this email exists
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        // Compare entered password with the hashed password in the database
        const isPasswordValid = await user.isPasswordCorrect(password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid password",
            });
        }

        // "Give me the user document, but exclude the password field."
        // frontend will not receve the password field in the response
        const loggedInUser = await User.findById(user._id).select("-password");

        // Generate JWT Token = Proof that the user has already logged in.
        // if we are not using JWT then server will ask password again and again for every request
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        return res.status(200).json({
            message: "Login successful",
            user: loggedInUser,
            token: token,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const getProfile = async (req, res) => {
    return res.status(200).json(req.user);
};

module.exports = {
    registerUser,
    loginUser,
    getProfile,
};