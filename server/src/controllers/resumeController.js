const extractTextFromPDF = require("../utils/pdfParser");


// Handles resume upload requests
const uploadResume = async (req, res) => {

    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({
            message: "Please upload a resume",
        });
    }

    // Read the uploaded PDF and extract its text
    const resumeText = await extractTextFromPDF(req.file.path);

    res.status(200).json({
        message: "Resume uploaded successfully",
        text: resumeText,
    });
};

module.exports = {
    uploadResume,
};