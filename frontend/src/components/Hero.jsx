import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="min-h-screen px-6 sm:px-10 py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
        {/* Left */}
        <div className="w-full lg:w-[40%]">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-normal tracking-[-0.05em] leading-none mt-4 sm:mt-8 mb-6 sm:mb-8">
            amisha raj n.
          </h1>

          <h3 className="mt-3 sm:mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[-0.03em]">
            Machine Learning • Information Retrieval • Computer Vision
          </h3>

          <img
            src={profile}
            alt="Amisha Raj"
            className="mt-8 w-full max-w-[760px] max-h-[850px] h-auto object-cover"
          />
        </div>

        {/* Right */}
        <div className="w-full lg:w-[50%]">
          <p className="-rotate-6 font-abramo text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 mt-8 lg:mt-70 mb-8 lg:mb-40">
            About Me
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-[800px] text-gray-300 text-justify">
            <span className="font-abramo text-3xl sm:text-4xl lg:text-5xl text-gray-400">
              I am{" "}
            </span>
            a final-year Computer Science student learning AI through building
            real-world systems.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-[800px] leading-relaxed text-gray-300 text-justify mt-6 sm:mt-8">
            I build projects in Information Retrieval, Computer Vision, and
            Retrieval-Augmented Generation while continuously exploring modern
            machine learning.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-[800px] leading-relaxed text-gray-300 text-justify mt-6 sm:mt-8">
            Outside of tech, I enjoy design, films, cinematography, and video
            editing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
