import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";


function ScoreCard({ score }) {
  const getColor = () => {
    if (score >= 80) return "#22c55e"; // Green
    if (score >= 50) return "#facc15"; // Yellow
    return "#ef4444"; // Red
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-800 rounded-xl p-8 mb-6 shadow-lg"
    >

      <h3 className="text-2xl font-bold text-center text-white mb-8">
        ATS Resume Score
      </h3>

      <div className="w-40 h-40 mx-auto">

        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: getColor(),
            textColor: "#ffffff",
            trailColor: "#334155",
            textSize: "18px",
          })}
        />

      </div>

      <p className="text-center text-gray-400 mt-6">
        Higher score means better ATS compatibility.
      </p>

    </motion.div>
  );
}

export default ScoreCard;