function SuggestionCard({ suggestions }) {
  return (
    <div className="bg-cyan-900/30 rounded-xl p-6">
      <h3 className="text-xl font-bold text-cyan-400 mb-4">
        💡 Suggestions
      </h3>

      <ul className="list-disc list-inside text-white space-y-2">
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionCard;