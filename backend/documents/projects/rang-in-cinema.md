# Rang-In-Cinema

## Overview

Rang-In-Cinema is a computer vision project that retrieves visually similar movie frames based on their color grading. Instead of searching by movie title or metadata, the system compares the visual characteristics of an uploaded image and finds frames with similar color palettes.

The project combines image processing techniques with a web application to demonstrate how computer vision can be used for visual search.

---

## Motivation

As someone who enjoys films and cinematography, I have always been fascinated by how color influences storytelling and emotion.

I wanted to build a project that combined my interest in filmmaking with Artificial Intelligence and Computer Vision. Rather than creating a traditional image classification model, I chose to explore image retrieval by searching for visually similar movie frames based on color.

---

## Features

- Image Upload
- Automatic Image Preview
- HSV Color Histogram Extraction
- Histogram Normalization
- Color Similarity Search
- Ranked Retrieval Results
- FastAPI Backend
- React Frontend

---

## Technology Stack

### Backend

- Python
- FastAPI

### Computer Vision

- OpenCV
- NumPy

### Frontend

- React

---

## System Pipeline

The project follows the following workflow:

1. Extract movie frames from selected films.
2. Convert each frame from RGB to HSV color space.
3. Compute normalized HSV color histograms.
4. Store histogram features for every frame.
5. Upload an image through the frontend.
6. Extract the uploaded image's histogram.
7. Compare histogram similarity with stored movie frames.
8. Return the most visually similar results.

---

## Challenges

One of the biggest challenges was deciding how to represent the visual style of an image.

Initially, I explored different feature extraction approaches before choosing HSV color histograms because they provide a simple yet effective representation of color distribution.

Another challenge was organizing the dataset, extracting frames from multiple films, generating feature databases, and connecting the computer vision pipeline to a FastAPI backend and React frontend.

The database is still not at its full potential as i extracted frames after every 2 seconds from 6 movie trailer hence, they include title cards, motion blur and still donot represent the whole movie's color space truly.

I will overcome these challenges in near future by gathering a better dataset.

---

## What I Learned

Through this project, I learned:

- Computer Vision fundamentals
- Image preprocessing
- HSV color space
- Color histograms
- Feature extraction
- Image similarity search
- FastAPI backend development
- React frontend integration
- Building complete AI applications

More importantly, I learned how relatively simple computer vision techniques can produce meaningful visual search systems without requiring deep learning models.

---

## Future Improvements

Some improvements I would like to explore include:

- CLIP embeddings for semantic image retrieval
- Deep feature extraction using pretrained CNNs
- Larger movie datasets
- Search by movie mood or genre
- Scene-level similarity
- Multi-image comparison
- Improved ranking algorithms

---

## Frequently Asked Questions

### Why did you build Rang-In-Cinema?

I wanted to combine two interests that I genuinely enjoy: Artificial Intelligence and cinematography. The project allowed me to explore Computer Vision while building something inspired by films rather than a traditional academic dataset.

### Why did you use HSV instead of RGB?

HSV separates color information from brightness, making it more suitable for comparing color distributions. Since the project focuses on color grading rather than object recognition, HSV provides a better representation of visual style.

### Does the system recognize movie scenes?

No. The system does not understand the semantic content of an image. Instead, it compares color distributions using histogram similarity to retrieve visually similar movie frames.

### Is this a deep learning project?

No. The current version relies on classical computer vision techniques rather than deep neural networks. This was intentional because I wanted to understand feature extraction and image retrieval fundamentals before exploring embedding-based methods.

### What would you improve next?

I would like to replace handcrafted color histograms with learned image embeddings using models such as CLIP. This would allow the system to retrieve images based on semantic meaning in addition to visual style.
