# Khoj

## Overview

Khoj is a search engine built from scratch to understand the progression of modern Information Retrieval systems. The project begins with traditional keyword-based search and gradually evolves into semantic search, hybrid retrieval, and Retrieval-Augmented Generation (RAG).

Rather than relying on existing search frameworks, I implemented each stage independently to gain a deeper understanding of how search systems work internally.

---

## Motivation

I wanted to understand how search engines retrieve relevant information beyond simple keyword matching.

Instead of jumping directly into large language models, I chose to first learn the fundamentals of Information Retrieval, beginning with lexical search before progressing toward semantic retrieval and Retrieval-Augmented Generation.

The project was built as a learning journey rather than a production search engine.

---

## Features

- Text preprocessing
- Inverted Index
- Keyword Search
- TF-IDF scoring
- Cosine Similarity
- Vector Space Model
- Sentence Embeddings
- Semantic Search
- FAISS Vector Database
- Hybrid Search
- Retrieval-Augmented Generation

---

## Technology Stack

### Machine Learning

- Sentence Transformers
- FAISS
- NumPy

---

## Information Retrieval Pipeline

The retrieval pipeline was implemented incrementally to understand how each stage improves search quality.

The project follows this progression:

1. Keyword Search using an inverted index
2. TF-IDF ranking
3. Cosine Similarity with the Vector Space Model
4. Semantic Search using sentence embeddings
5. Vector similarity search using FAISS
6. Hybrid Search combining lexical and semantic retrieval
7. Retrieval-Augmented Generation for natural language answers

---

## Challenges

One of the biggest challenges was understanding the difference between lexical retrieval and semantic retrieval.

Keyword search performs well when exact words match, while semantic search retrieves documents based on meaning. Combining these two retrieval methods required normalizing scores before calculating a hybrid ranking.

Another challenge was understanding vector embeddings and how similarity search works using FAISS.

---

## What I Learned

Through Khoj, I developed a practical understanding of:

- Information Retrieval
- Search engine architecture
- TF-IDF
- Cosine Similarity
- Vector Space Models
- Sentence Embeddings
- Semantic Search
- Vector Databases
- Hybrid Retrieval
- Retrieval-Augmented Generation

More importantly, I learned how modern AI search systems combine traditional Information Retrieval techniques with Large Language Models.

---

## Future Improvements

Some planned improvements include:

- Query expansion
- Document chunking
- Improved RAG pipeline
- Evaluation metrics for retrieval quality
- Support for larger document collections

---

## Frequently Asked Questions

### Why did you build Khoj?

I wanted to understand Information Retrieval from first principles instead of relying solely on high-level AI frameworks. Building each retrieval technique individually helped me understand why modern search systems are designed the way they are.

### What was the biggest takeaway from this project?

The biggest lesson was understanding that retrieval quality directly impacts the quality of AI-generated answers. Before learning Retrieval-Augmented Generation, I first needed to understand how search systems determine relevance.

### What part of the project are you most proud of?

I am most proud of implementing the complete progression from keyword search to semantic search, hybrid retrieval, and Retrieval-Augmented Generation within a single project. It allowed me to see how each technique builds upon the previous one.

### Is Khoj a production search engine?

No. Khoj is primarily a learning project designed to explore Information Retrieval concepts through implementation. The focus was on understanding how search engines work internally rather than building a production-ready search platform.
