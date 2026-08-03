const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");   // Used to securely hash passwords

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

// Runs automatically before saving a user to MongoDB
// Runs automatically before saving a user to MongoDB
userSchema.pre("save", async function () {

    // Skip hashing if password hasn't changed
    if (!this.isModified("password")) return;

    // Convert plain password into a secure hashed password
    this.password = await bcrypt.hash(this.password, 10);
});

// Custom method used during login to compare entered password
// with the hashed password stored in the database
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);

module.exports = User;