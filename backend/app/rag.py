from langchain_community.document_loaders import DirectoryLoader,TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_core.documents import Document
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")


def load_documents()-> list[Document]:
    loader = DirectoryLoader("documents/",glob = "**/*.md",loader_cls=TextLoader)
    documents = loader.load()
    return documents

documents = load_documents()

def split_documents(documents: list[Document])->list[Document]:
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size = 500,
        chunk_overlap = 100,
        length_function = len
    )

    chunk_documents = text_splitter.split_documents(documents)

    return chunk_documents

chunks = split_documents(documents)

def create_embedding_model():
    embedding_model = GoogleGenerativeAIEmbeddings(model="gemini-embedding-001",google_api_key=api_key)
    return embedding_model

embedder = create_embedding_model()



