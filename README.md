## Visit Portfolio:

https://portfolio-amisha-raj-niroula.vercel.app/

## Portfolio RAG Chatbot

An AI-powered chatbot integrated into my portfolio that answers questions about my skills, projects, and interests.

Built using LangChain, Google Gemini, and FAISS, the chatbot uses a Retrieval-Augmented Generation (RAG) pipeline to retrieve relevant information from my portfolio documents before generating a response. It is designed to answer using only the provided context and avoids making up information when an answer is unavailable.

### How It Works

1. Portfolio information is stored in Markdown documents.
2. LangChain loads and splits the documents into smaller chunks.
3. Google Gemini Embeddings converts the text into vector embeddings.
4. FAISS stores the embeddings and retrieves relevant information based on the user's question.
5. Gemini generates an answer using only the retrieved context.

### Tech Stack

- LangChain
- Google Gemini
- Gemini Embeddings
- FAISS
- FastAPI
- React
- Tailwind CSS

The chatbot is designed to answer based only on the provided portfolio information and responds with _“I don't have enough information about that.”_ when relevant information is unavailable.
