function Footer() {
  return (
    <footer className="px-10 py-24 border-t border-zinc-700 ">
      <h2 className="font-abramo text-8xl  -rotate-6 inline-block text-gray-400 mb-16">
        Get in Touch!
      </h2>

      <div className="flex flex-col justify-between items-start">
        <div className="flex gap-10 mb-8 text-xl">
          <a
            href="https://github.com/amisharn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amisha-raj-niroula-23a979267/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href="https://x.com/_amisharn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            X
          </a>

          <a
            href="mailto:niroulaamisharaj@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
        <p className="text-zinc-500 text-lg">© 2026 Amisha Raj Niroula</p>
      </div>
    </footer>
  );
}

export default Footer;
