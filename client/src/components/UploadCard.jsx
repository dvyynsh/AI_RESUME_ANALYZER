import { useState } from "react";
import api from "../services/api";

function UploadCard() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload resume
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);

      const response = await api.post(
        "/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

    } 
    
    catch (error) {
    console.log("FULL ERROR:", error);

    if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
    }

    alert("Upload failed!");
}
    finally {
      setLoading(false);
    }

  };

  return (
    <div className="mt-16 flex justify-center">
      <div className="bg-slate-900 rounded-2xl shadow-xl p-10 w-full max-w-2xl">

        <h2 className="text-3xl font-bold text-center text-white">
          Upload Resume
        </h2>

        <p className="text-center text-gray-400 mt-2">
          Only PDF files are supported
        </p>

        <div className="border-2 border-dashed border-cyan-500 rounded-xl p-10 mt-8 text-center">

          <p className="text-gray-300 mb-4">
            Drag & Drop your Resume here
          </p>

          <p className="text-gray-500 mb-4">OR</p>

          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="text-white"
          />

          {file && (
            <p className="text-green-400 mt-4">
              Selected: {file.name}
            </p>
          )}

        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 transition duration-300 text-white py-4 rounded-xl font-bold"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>

        {result && (
          <div className="mt-8 bg-slate-800 rounded-xl p-5 text-white">

            <h3 className="text-2xl font-bold mb-3">
              Analysis Result
            </h3>

            <pre className="whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>

          </div>
        )}

      </div>
    </div>
  );
}

export default UploadCard;