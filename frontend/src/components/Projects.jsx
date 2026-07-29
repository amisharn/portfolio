import Project from "./ProjectCard";
import khoj from "../assets/images/khoj.png";
import rang from "../assets/images/rang.png";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 sm:px-10 py-12 sm:py-16 lg:py-16"
    >
      <p className="font-abramo text-5xl sm:text-6xl md:text-7xl lg:text-7xl -rotate-6 inline-block text-gray-400 ">
        Selected Works
      </p>

      {/* Khoj */}
      <Project
        number="01"
        title="Khoj(खोज)"
        subtitle="Building a Search Engine from Scratch"
        description="A search engine built from scratch to explore Information Retrieval, implementing keyword search, TF-IDF, semantic search, hybrid retrieval, and Retrieval-Augmented Generation."
        tech="Python • FastAPI • FAISS • Sentence Transformers • Groq "
        image={khoj}
        github="https://github.com/amisharn/khoj"
        demo=""
      />

      {/* Rang in Cinema */}
      <Project
        number="02"
        title="Rang-in-Cinema (रङ्गीन सिनेमा / रङ-इन-सिनेमा)"
        subtitle="Movie Stills Search by Color Grading"
        description="An image retrieval system that finds movie frames with similar color grading using HSV color histograms and computer vision techniques."
        tech="Python • OpenCV • FastAPI • React"
        image={rang}
        github="https://github.com/amisharn/rang-in-cinema"
        demo="https://rang-in-cinema.vercel.app/"
      />
    </section>
  );
}

export default Projects;
