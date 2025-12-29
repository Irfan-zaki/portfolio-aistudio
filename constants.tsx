
import React from 'react';
import { Project, Skill } from './types';

export const RESUME_DATA = {
  name: "Irfan Zaki",
  email: "zakiirfan141@gmail.com",
  phone: "7162432",
  education: {
    degree: "Bachelors Of Science (2024-27)",
    institution: "University Of Delhi"
  },
  interests: ["Anime", "Football", "Philosophy"],
  bio: "MERN Stack Engineer with a profound passion for AI and machine learning. A thinker at heart, I strive to bridge the gap between abstract concepts and functional, scalable code."
};

export const PROJECTS: Project[] = [
  {
    title: "Talk To Youtube (RAG)",
    description: "A Streamlit-based web application that enables users to interact conversationally with YouTube video transcripts using LangChain and Gemini.",
    tags: ["Gemini AI", "LangChain", "Python", "Streamlit"],
    githubLink: "https://github.com",
    liveLink: "https://youtube-rag.com",
    imageUrl: "https://picsum.photos/seed/yt/800/400"
  },
  {
    title: "Student Performance Prediction",
    description: "ML application predicting math scores based on features like gender, ethnicity, and preparation level using regression techniques.",
    tags: ["Scikit-Learn", "Python", "ML", "Pandas"],
    githubLink: "https://github.com",
    imageUrl: "https://picsum.photos/seed/ml/800/400"
  },
  {
    title: "Customer Churn Prediction",
    description: "Deep learning classification model using ANN to predict customer churn, implemented with TensorFlow and Scikit-Learn.",
    tags: ["TensorFlow", "ANN", "Deep Learning", "Keras"],
    githubLink: "https://github.com",
    imageUrl: "https://picsum.photos/seed/churn/800/400"
  },
  {
    title: "Data2Model",
    description: "A comprehensive Streamlit app designed to automate data cleaning, exploration, and model deployment.",
    tags: ["Streamlit", "Automation", "Data Science"],
    imageUrl: "https://picsum.photos/seed/d2m/800/400"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", category: "Programming", description: "Primary language for ML, scripting, and backend." },
  { name: "Javascript", category: "Programming", description: "The backbone of modern web applications." },
  { name: "Typescript", category: "Programming", description: "Scalable development with type safety." },
  { name: "React", category: "Frameworks", description: "Building interactive and dynamic user interfaces." },
  { name: "Express", category: "Frameworks", description: "Lightweight and flexible Node.js web framework." },
  { name: "MongoDB", category: "Frameworks", description: "NoSQL database for modern data architectures." },
  { name: "Node.js", category: "Frameworks", description: "Server-side JavaScript runtime for high performance." },
  { name: "PyTorch", category: "AI/ML", description: "Deep learning framework for research and production." },
  { name: "Scikit-Learn", category: "AI/ML", description: "Fundamental toolkit for classical machine learning." },
  { name: "Langchain", category: "AI/ML", description: "Orchestrating complex LLM-powered workflows." },
  { name: "GitHub", category: "Tools", description: "Version control and collaborative development." },
  { name: "Docker", category: "Tools", description: "Containerization for consistent environments." },
  { name: "Postman", category: "Tools", description: "Testing and documenting RESTful APIs." }
];
