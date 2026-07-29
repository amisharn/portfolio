function Project({
  number,
  title,
  subtitle,
  description,
  tech,
  image,
  github,
  demo,
}) {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 mt-20 sm:mt-32 lg:mt-40">
      <div className="lg:col-span-5">
        <p className="text-3xl sm:text-4xl lg:text-4xl text-cyan-400 mb-4 sm:mb-6 mt-4 sm:mt-8">
          {number}
        </p>

        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl tracking-[-0.05em]">
          {title}
        </h3>

        <p className="text-lg sm:text-xl lg:text-2xl mt-3 sm:mt-4 mb-6 sm:mb-10 lg:mb-16 text-gray-400">
          {subtitle}
        </p>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed text-justify max-w-[800px] mt-4 sm:mt-8 mb-5">
          {description}
        </p>

        <p className="text-white text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-10 lg:mt-16">
          {tech}
        </p>
        <div className="mt-6 sm:mt-10 flex flex-wrap gap-6 sm:gap-10">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg sm:text-xl lg:text-2xl hover:text-white text-cyan-400 transition-colors"
          >
            view on gitHub
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-cyan-400 transition-colors text-lg sm:text-xl lg:text-2xl"
            >
              visit live demo
            </a>
          )}
        </div>
      </div>

      <div className="mt-4 lg:mt-8 lg:col-span-7 flex justify-center lg:justify-end">
        <img
          src={image}
          alt={title}
          className="w-full max-w-[1500px] object-contain"
        />
      </div>
    </section>
  );
}

export default Project;
