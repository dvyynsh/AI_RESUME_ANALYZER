const extractTextFromPDF = require("../utils/pdfParser");
const analyzeResume = require("../services/aiService");

const uploadResume = async (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            message: "Please upload a resume",
        });
    }

    console.log("Uploaded file:", req.file); // <-- ADD THIS HERE

    const resumeText = await extractTextFromPDF(req.file.path);

    const analysis = await analyzeResume(resumeText);

    let parsedAnalysis;

    try {
        parsedAnalysis = JSON.parse(analysis);
    } catch (error) {
        return res.status(500).json({
            message: "AI returned an invalid response.",
        });
    }

    res.status(200).json({
        message: "Resume Analysis successfully",
        analysis: parsedAnalysis,
    });
};

module.exports = {
    uploadResume,
};