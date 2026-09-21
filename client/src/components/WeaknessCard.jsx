function WeaknessCard({ weaknesses }) {
  return (
    <div className="bg-red-900/30 rounded-xl p-6 mb-6">
      <h3 className="text-xl font-bold text-red-400 mb-4">
        ⚠ Weaknesses
      </h3>

      <ul className="list-disc list-inside text-white space-y-2">
        {weaknesses.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default WeaknessCard;