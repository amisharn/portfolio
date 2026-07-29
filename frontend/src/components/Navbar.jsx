function Navbar() {
  return (
    <nav className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-6 sm:py-8 gap-4 sm:gap-0">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-cyan-200 font-normal tracking-[-0.05em]">
        amisha raj niroula
      </h1>

      <div className="flex gap-6 sm:gap-8 md:gap-12 text-base sm:text-lg md:text-2xl">
        <a
          href="#projects"
          className="text-cyan-200 hover:text-white transition-colors"
        >
          projects
        </a>

        <a
          href="https://github.com/amisharn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors text-cyan-400"
        >
          view github
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
