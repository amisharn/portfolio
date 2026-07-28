function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-8">
      <h1 className="text-3xl text-cyan-200 font-normal tracking-[-0.05em] ">
        amisha raj niroula
      </h1>

      <div className="fixed top-8 right-10 flex gap-12 text-2xl">
        <a
          href="#projects"
          className="text-cyan-200   hover:text-white transition-colors"
        >
          projects
        </a>

        <a
          href="https://github.com/amisharn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white  transition-colors text-cyan-400"
        >
          view github
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
