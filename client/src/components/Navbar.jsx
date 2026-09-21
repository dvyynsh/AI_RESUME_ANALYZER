function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Resume<span className="text-cyan-400">AI</span>
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Features
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Pricing
          </li>

          <li className="hover:text-cyan-400 transition cursor-pointer">
            Contact
          </li>

        </ul>

        {/* Buttons */}
        <div className="flex gap-4">

          <button className="px-5 py-2 rounded-lg border border-gray-600 text-white hover:border-cyan-400 transition">
            Sign In
          </button>

          <button className="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition">
            Get Started
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;