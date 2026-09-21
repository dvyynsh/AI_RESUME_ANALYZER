function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 text-center">

      {/* CHANGED: Small Badge */}
      <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500 text-cyan-400 font-medium mb-8">
        🚀 AI Powered Resume Analysis
      </div>

      {/* HANGED: Main Heading */}
      <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-white">
        Land Your
        <span className="text-cyan-400"> Dream Job </span>
        Faster
      </h1>

      {/* CHANGED: Description */}
      <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-8">
        Upload your resume and receive an AI-powered ATS score,
        identify missing skills, discover strengths & weaknesses,
        and get personalized suggestions in seconds.
      </p>

      {/* CHANGED: CTA Buttons */}
      <div className="mt-12 flex justify-center gap-5">

        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold text-white transition">
          Analyze Resume
        </button>

        <button className="border border-gray-600 hover:border-cyan-400 px-8 py-4 rounded-xl text-lg font-semibold text-white transition">
          Learn More
        </button>

      </div>

      {/* CHANGED: Stats */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-4xl font-bold text-cyan-400">95%</h2>
          <p className="text-gray-400 mt-2">ATS Accuracy</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-4xl font-bold text-cyan-400">AI</h2>
          <p className="text-gray-400 mt-2">Powered Analysis</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-gray-800">
          <h2 className="text-4xl font-bold text-cyan-400">10s</h2>
          <p className="text-gray-400 mt-2">Average Analysis Time</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;