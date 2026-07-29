from fastapi import FastAPI
from app.rag import answer_query
from pydantic import BaseModel

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173","https://portfolio-amisha-raj-niroula.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    query: str

@app.get("/")
def root():
    return {"message" : "Server is running"}

@app.post("/chat")
def chat_response(request: ChatRequest):
    try:
        answer = answer_query(request.query)
        return {"answer": answer}

    except Exception as error:
        print("Chatbot error:", error)

        return {
            "answer": "The AI assistant is temporarily unavailable. Please try again in a moment."
        }
