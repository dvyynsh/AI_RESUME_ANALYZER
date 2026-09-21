function MissingSkillsCard({ skills }) {
  return (
    <div className="bg-yellow-900/30 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold text-yellow-400 mb-4">
        📚 Missing Skills
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MissingSkillsCard;