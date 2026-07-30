const User = require("../models/User");    // we imported user.schema

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;   // as 

        console.log(name);
        console.log(email);
        console.log(password);

        res.send("Data Received Successfully");
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    registerUser,
};