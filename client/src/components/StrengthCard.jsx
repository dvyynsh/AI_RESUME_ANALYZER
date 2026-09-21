function StrengthCard({ strengths }) {
  return (
    <div className="bg-green-900/30 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold text-green-400 mb-4">
        💪 Strengths
      </h3>

      <ul className="list-disc list-inside text-white space-y-2">
        {strengths.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StrengthCard;