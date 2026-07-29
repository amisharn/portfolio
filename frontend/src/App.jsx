import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingChatButton from "./components/FloatingChatButton";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen bg-zinc-800 text-white">
      <Navbar />

      <Hero />

      <FloatingChatButton onClick={() => setChatOpen(true)} />
      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      <Projects />

      <Footer />
    </main>
  );
}

export default App;
