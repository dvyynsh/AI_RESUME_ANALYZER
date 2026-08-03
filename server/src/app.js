const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const express = require("express");

const app = express();

// Middleware
app.use(express.json());

//router
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);



app.get("/", (req, res) => {
    res.send("🚀 AI Resume Analyzer Backend Running...");
});


module.exports = app;