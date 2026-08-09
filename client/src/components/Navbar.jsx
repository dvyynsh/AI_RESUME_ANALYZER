function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-slate-900 text-white shadow-lg">

      <h1 className="text-2xl font-bold text-cyan-400">
        AI Resume Analyzer 🚀
      </h1>

      <ul className="flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-cyan-400 transition">
          Home
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          About
        </li>

        <li className="cursor-pointer hover:text-cyan-400 transition">
          GitHub
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;