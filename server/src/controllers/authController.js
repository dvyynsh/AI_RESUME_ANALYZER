const User = require("../models/User");    // we imported user.schema

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
        
        res.status(201).json({
            message: "User registered successfully",
            user,  // displaying user data in response
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

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
};