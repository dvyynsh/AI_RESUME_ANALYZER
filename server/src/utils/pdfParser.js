const fs = require("fs");
const pdfParse = require("pdf-parse");

// Reads a PDF file and returns its text
const extractTextFromPDF = async (filePath) => {
    const dataBuffer = fs.readFileSync(filePath);  // read the pdf

    const data = await pdfParse(dataBuffer);   // convert the Pdf to text

    return data.text;  // Returns only the extracted text
};

module.exports = extractTextFromPDF;