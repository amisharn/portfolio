import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingChatButton from "./components/FloatingChatButton";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-zinc-800 text-white">
      <Navbar />
      <Hero />
      <FloatingChatButton />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
