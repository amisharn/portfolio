import profile from "../assets/images/profile.jpeg";

function Hero() {
  return (
    <section className="min-h-screen px-10">
      <div className="flex justify-between items-start">
        {/* Left */}
        <div className="w-[40%]">
          <h1 className="text-9xl font-normal tracking-[-0.05em] leading-none mt-8 mb-8">
            amisha raj n.
          </h1>

          <h3 className="mt-5 text-3xl tracking-[-0.03em]">
            Machine Learning • Information Retrieval • Computer Vision
          </h3>

          <img
            src={profile}
            alt="Amisha Raj"
            className="mt-8 w-full max-w-[760px] max-h-[850px] h-auto object-cover"
          />
        </div>

        {/* Right */}
        <div className="w-[50%] ">
          <p className="-rotate-6 font-abramo text-7xl uppercase tracking-[0.3em] text-gray-400 mt-70 mb-40">
            About Me
          </p>

          <p className="text-3xl leading-relaxed max-w-[800px] text-gray-300 text-justify">
            <span className="font-abramo text-5xl text-gray-400">I am </span>a
            final-year Computer Science student learning AI through building
            real-world systems.
          </p>
          <p className="text-3xl max-w-[800px] leading-relaxed text-gray-300 text-justify mt-8">
            I build projects in Information Retrieval, Computer Vision, and
            Retrieval-Augmented Generation while continuously exploring modern
            machine learning.
          </p>
          <p className="text-3xl max-w-[800px] leading-relaxed text-gray-300 text-justify mt-8">
            Outside of tech, I enjoy design, films, cinematography, and video
            editing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
