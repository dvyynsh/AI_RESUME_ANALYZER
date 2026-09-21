import ScoreCard from "./ScoreCard";
import StrengthCard from "./StrengthCard";
import WeaknessCard from "./WeaknessCard";
import MissingSkillsCard from "./MissingSkillsCard";
import SuggestionCard from "./SuggestionCard";
import { motion } from "framer-motion";

function ResultCard({ analysis }) {
  return (
      <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10"
    >

      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Resume Analysis
      </h2>

      {/* Score */}
      <ScoreCard score={analysis.score} />

      {/* Strengths */}
      <StrengthCard strengths={analysis.strengths} />

      {/* Weaknesses */}
      <WeaknessCard weaknesses={analysis.weaknesses} />

      {/* Missing Skills */}
      <MissingSkillsCard skills={analysis.missingSkills} />

      {/* Suggestions */}
      <SuggestionCard suggestions={analysis.suggestions} />
      </motion.div>
  );
}

export default ResultCard;