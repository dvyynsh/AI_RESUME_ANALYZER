const extractTextFromPDF = require("../utils/pdfParser");
const analyzeResume = require("../services/aiService");

// Handles resume upload requests
const uploadResume = async (req, res) => {

    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({
            message: "Please upload a resume",
        });
    }

    // Step 1: Extract text from the uploaded PDF
    const resumeText = await extractTextFromPDF(req.file.path);

    // Step 2: Send the text to Gemini AI
    const analysis = await analyzeResume(resumeText);

    // Step 3: Return AI analysis
    res.status(200).json({
        message: "Resume Analysis successfully",
        analysis,
    });
};

module.exports = {
    uploadResume,
};