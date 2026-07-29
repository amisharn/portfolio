import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="min-h-screen px-6 sm:px-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
        {/* Left */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.05em] leading-none mt-4 sm:mt-8 mb-1 sm:mb-8">
            amisha raj n.
          </h1>

          <h3 className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl lg:text-2xl tracking-[-0.03em]">
            Machine Learning • Information Retrieval • Computer Vision
          </h3>

          <img
            src={profile}
            alt="Amisha Raj"
            width={500}
            height={560}
            className="mt-1 w-full max-w-[500px] max-h-[560px] h-auto object-cover"
          />
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2 mt-0 lg:mt-50">
          <p className="-rotate-6 font-abramo text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 mt-8 lg:mt-16 mb-8 lg:mb-8 mb-8">
            About Me
          </p>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-[700px] text-gray-300 text-justify">
            <span className="font-abramo text-xl sm:text-2xl md:text-3xl text-gray-400">
              I am{" "}
            </span>
            a final-year Computer Science student learning AI through building
            real-world systems.
          </p>
          <p className="text-base sm:text-lg md:text-xl max-w-[700px] leading-relaxed text-gray-300 text-justify mt-6 sm:mt-8">
            I build projects in Information Retrieval, Computer Vision, and
            Retrieval-Augmented Generation while continuously exploring modern
            machine learning.
          </p>
          <p className="text-base sm:text-lg md:text-xl max-w-[700px] leading-relaxed text-gray-300 text-justify mt-6 sm:mt-8">
            Outside of tech, I enjoy design, films, cinematography, and video
            editing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
