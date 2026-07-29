from langchain_community.document_loaders import DirectoryLoader,TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_core.documents import Document
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")



def load_documents()-> list[Document]:
    loader = DirectoryLoader("documents/",glob = "**/*.md",loader_cls=TextLoader)
    documents = loader.load()
    return documents



def split_documents(documents: list[Document])->list[Document]:
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size = 500,
        chunk_overlap = 100,
        length_function = len
    )

    chunk_documents = text_splitter.split_documents(documents)

    return chunk_documents



def create_embedding_model():
    embedding_model = GoogleGenerativeAIEmbeddings(model="gemini-embedding-001",google_api_key=api_key)
    return embedding_model

embedder = create_embedding_model()

def create_vector_store(chunks,embedder):
    vector_store = FAISS.from_documents(documents = chunks, embedding = embedder)
    return vector_store

#now i don't currently need the functions above as i already created and stored faiss index locally

def load_vector_store(embedder):
    vector_store = FAISS.load_local("vector_store/",embedder,allow_dangerous_deserialization=True)
    return vector_store

vector_store = load_vector_store(embedder)
retriever = vector_store.as_retriever()




def create_context(retrieved_docs):
    context = ""
    for doc in retrieved_docs:
        context+=f"{doc.page_content} \n\n"
    return context


def create_prompt():
    prompt_template = PromptTemplate (
        template="""You are an AI assistant for Amisha's portfolio. You are not Amisha. Use only the information provided in the context.Do not make up information.If the answer is not available in the context, say 'I don't have enough information about that. 

        Context:
        {context}

        Question:
        {query}

        Answer:
        """,
        input_variables=["context","query"]
    )
    return prompt_template

prompt_template = create_prompt()
def create_llm():
    llm = ChatGoogleGenerativeAI(model = "gemini-3.1-flash-lite",google_api_key = api_key)
    return llm

llm = create_llm()


def answer_query(query):
    retrieved_docs = retriever.invoke(query)
    context = create_context(retrieved_docs)
    final_prompt = prompt_template.format(context = context, query = query)
    response = llm.invoke(final_prompt)
    return(response.content[0]["text"])

