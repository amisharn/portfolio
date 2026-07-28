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
    <section className="grid grid-cols-12 gap-12 mt-40">
      <div className="col-span-5">
        <p className="text-5xl text-cyan-400 mb-6 mt-8">{number}</p>

        <h3 className="text-7xl tracking-[-0.05em]">{title}</h3>

        <p className="text-3xl mt-4 mb-16 text-gray-400">{subtitle}</p>

        <p className="text-2xl text-gray-300 leading-relaxed text-justify max-w-[800px] mt-8 mb-5">
          {description}
        </p>

        <p className="text-white text-3xl mt-16">{tech}</p>
        <div className="mt-10 flex gap-10">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-white text-cyan-400 transition-colors"
          >
            view on gitHub{" "}
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-cyan-400 transition-colors text-3xl"
            >
              visit live demo
            </a>
          )}
        </div>
      </div>

      <div className="mt-8 col-span-7 flex justify-end">
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
