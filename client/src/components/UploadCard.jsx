import { useState } from "react";
import api from "../services/api";
import ResultCard from "./ResultCard";

function UploadCard() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a PDF resume.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const formData = new FormData();
      formData.append("resume", file);

      const response = await api.post("/resume/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult(response.data);
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-20">

      {/* Upload Card */}
      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 shadow-2xl">

        <h2 className="text-4xl font-bold text-center text-white">
          Upload Your Resume
        </h2>

        <p className="text-gray-400 text-center mt-3">
          Upload your resume and receive an AI-powered ATS analysis.
        </p>

        {/* Upload Box */}
        <label
          htmlFor="resume"
          className="mt-10 flex flex-col items-center justify-center border-2 border-dashed border-cyan-500 hover:border-cyan-400 hover:bg-slate-800 transition-all duration-300 rounded-2xl p-14 cursor-pointer"
        >
          <div className="text-7xl">📄</div>

          <h3 className="text-2xl font-bold text-white mt-5">
            Drag & Drop Resume
          </h3>

          <p className="text-gray-400 mt-2">
            or click anywhere to browse
          </p>

          <p className="text-sm text-gray-500 mt-4">
            PDF • Max Size 5 MB
          </p>

          <input
            id="resume"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Selected File */}
        {file && (
          <div className="mt-6 bg-slate-800 rounded-xl p-5 flex justify-between items-center">

            <div>
              <p className="text-white font-semibold">
                📄 {file.name}
              </p>

              <p className="text-gray-400 text-sm">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-semibold">
              Ready
            </span>

          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 bg-red-500/10 border border-red-500 rounded-xl p-4 text-red-400">
            {error}
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="mt-8 w-full py-4 rounded-2xl text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition-all duration-300 text-white disabled:opacity-50"
        >
          {loading ? "⏳ Analyzing Resume..." : "🚀 Analyze Resume"}
        </button>

      </div>

      {/* Result */}
      {result && (
        <div className="mt-14">
          <ResultCard analysis={result.analysis} />
        </div>
      )}
    </div>
  );
}

export default UploadCard;