import { useEffect, useRef, useState } from "react";

function Chatbot({ isOpen, onClose }) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! Ask me anything about Amisha's projects, skills, or interests.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Reference to the bottom of the chat
  const messagesEndRef = useRef(null);

  // Automatically scroll to the newest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function handleSend() {
    // Prevent empty messages or multiple requests
    if (!message.trim() || loading) return;

    const userMessage = message.trim();

    // Add the user's message immediately
    setMessages((previousMessages) => [
      ...previousMessages,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    // Clear the input
    setMessage("");

    // Show loading state
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: userMessage,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to get a response");
      }

      const data = await response.json();

      // Add the AI response
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "assistant",
          content:
            data.answer ||
            "Sorry, I couldn't generate a response. Please try again.",
        },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      // Show a friendly error in the chat
      setMessages((previousMessages) => [
        ...previousMessages,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect to the AI assistant. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        z-40

        bottom-24
        right-4
        left-4

        sm:left-auto
        sm:w-[380px]
        sm:right-6

        lg:right-8
        lg:w-[500px]

        mb-20
        

        h-[65vh]
        max-h-[600px]
        min-h-[400px]

        rounded-2xl
        border
        border-cyan-400

        bg-neutral-900/90
        backdrop-blur-md

        shadow-2xl

        flex
        flex-col
        overflow-hidden
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between

          p-4

          border-b
          border-cyan-400/30

        "
      >
        <div>
          <h2 className="mt-2 text-5xl font-semibold text-cyan-400 font-abramo">
            Ask Amisha!
          </h2>
        </div>

        <button
          onClick={onClose}
          className="
            text-xl
            text-gray-400

            transition

            hover:text-white
          "
          aria-label="Close chatbot"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        className="
          flex-1
          overflow-y-auto

          p-4
          space-y-3
          
        "
      >
        {messages.map((chatMessage, index) => (
          <div
            key={index}
            className={`
              max-w-[85%]
              rounded-xl
              p-3

              text-lg
              leading-relaxed

              whitespace-pre-wrap

              ${
                chatMessage.role === "user"
                  ? "ml-auto bg-cyan-400 text-black"
                  : "mr-auto bg-neutral-800 text-white"
              }
            `}
          >
            {chatMessage.content}
          </div>
        ))}

        {/* Loading message */}
        {loading && (
          <div
            className="
              mr-auto
              max-w-[85%]

              rounded-xl
              p-3

              bg-neutral-800
              text-sm
              text-gray-400
            "
          >
            Thinking...
          </div>
        )}

        {/* Auto-scroll target */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        className="
          flex
          gap-2

          border-t
          border-cyan-400/20

          p-3
        "
      >
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSend();
            }
          }}
          disabled={loading}
          className="
            flex-1
            min-w-0

            rounded-xl

            border
            border-neutral-700

            bg-neutral-800

            px-3
            py-2

            text-xl

            outline-none

            focus:border-cyan-400

            disabled:opacity-50
          "
          placeholder="Ask something..."
        />

        <button
          onClick={handleSend}
          disabled={loading || !message.trim()}
          className="
            rounded-xl

            bg-cyan-400

            px-4

            font-medium
            text-black
            text-xl

            transition

            hover:scale-105

            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:scale-100
          "
        >
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
