// Handles resume upload requests
const uploadResume = async (req, res) => {

    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({
            message: "Please upload a resume",
        });
    }

    res.status(200).json({
        message: "Resume uploaded successfully",
        file: req.file,
    });
};

module.exports = {
    uploadResume,
};