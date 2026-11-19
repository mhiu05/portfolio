import type { Project } from "../../types/portfolio";

export const nonInvasive: Project = {
  id: "non-invasive",
  slug: "non-invasive",
  name: "Non-Invasive",
  category: "Computer Vision / rPPG / RAG",
  summary:
    "Camera-based physiological signal analysis combining remote photoplethysmography, background video processing and a retrieval-augmented AI assistant.",
  role: null,
  technologies: [
    "Python", "FastAPI", "React", "MediaPipe", "ONNX Runtime", "SciPy",
    "LangChain", "FAISS", "Google Gemini", "Celery", "Redis", "Supabase", "Docker",
  ],
  status: "In development",
  featured: false,
  cover: "/images/projects/non-invasive/demo.png",
  coverAlt:
    "Non-Invasive repository demo showing a webcam face overlay, heart-rate and signal-quality panels, and a BVP waveform",
  visual: "vitals",
  github: "https://github.com/mhiu05/Non-Invasive",
  demo: null,
  highlights: [
    "Webcam & uploaded-video analysis",
    "rPPG inference & signal processing",
    "Hybrid retrieval & AI explanations",
  ],
  caseStudy: {
    introduction:
      "Non-Invasive explores estimating physiological signals from facial video without contact sensors. It connects live webcam analysis and queued video processing with signal visualization, measurement history and a document-grounded AI assistant.",
    note:
      "Based on the repository, README and selected source files. The image is a repository demo capture. Runtime behavior and benchmarks were not independently reproduced for this portfolio. Estimates and AI explanations are informational, not a medical diagnosis.",
    architecture: {
      label: "Repository architecture",
      description:
        "WebSocket frames reach FastAPI; uploaded videos run through Celery and Redis. Both paths use face detection, ONNX inference and signal processing. Supabase supports authentication, history and storage. A separate LangChain retrieval path combines FAISS, BM25, re-ranking and Gemini for chat.",
      nodes: [
        { id: "capture", title: "React interface", detail: "Webcam, upload & charts" },
        { id: "api", title: "FastAPI & workers", detail: "WebSocket, Celery & Redis" },
        { id: "inference", title: "Vision & signals", detail: "MediaPipe, ONNX & SciPy" },
        { id: "context", title: "Storage & RAG", detail: "Supabase, FAISS & Gemini" },
      ],
    },
    sections: [
      {
        id: "problem",
        title: "Problem & Motivation",
        paragraphs: [
          "The project explores extracting pulse-related signals from subtle facial color changes captured by a conventional camera, bringing video capture, model inference and understandable feedback into one application.",
        ],
      },
      {
        id: "contribution",
        title: "My Contribution",
        paragraphs: [
          "The repository includes the vision pipeline, backend, task workers and React frontend. The portfolio owner's individual responsibilities and contributions have not yet been documented.",
        ],
        placeholder: true,
      },
      {
        id: "implementation",
        title: "Technical Implementation",
        paragraphs: [
          "MediaPipe identifies face regions; ONNX Runtime executes FactorizePhys to obtain a BVP signal. SciPy processes the signal to derive heart-rate, variability and signal-quality estimates.",
        ],
        bullets: [
          "FastAPI WebSocket analysis feeds the React face overlay and waveform.",
          "Celery and Redis handle uploaded-video jobs, with results saved to history.",
          "The chatbot uses FAISS, BM25, query expansion, cross-encoder re-ranking and Gemini.",
          "Supabase provides Auth, PostgreSQL history and video storage; Docker Compose defines the services.",
        ],
      },
      {
        id: "challenges",
        title: "Engineering Challenges",
        paragraphs: [
          "Motion, lighting and unstable face crops affect the input signal. The implementation smooths face regions and separates inference from the live event loop. Uploaded videos also require job tracking and storage cleanup across API and worker boundaries.",
        ],
      },
      {
        id: "tradeoffs",
        title: "Solutions and Trade-offs",
        paragraphs: [
          "Live analysis prioritizes continuous feedback, while queued uploads move longer processing into workers. Hybrid retrieval adds query expansion and re-ranking; responses distinguish internal-document answers from general-model fallback.",
        ],
      },
      {
        id: "results",
        title: "Results & Evidence",
        paragraphs: [
          "The repository supplies a demo capture, architecture diagram, benchmark plots and setup instructions. The screenshot demonstrates the interface, not measurement accuracy.",
          "The README reports experiments under still, head-motion and talking conditions. Those experiments were not reproduced for this portfolio; no independent accuracy or clinical-validation claim is made here.",
        ],
      },
      {
        id: "lessons",
        title: "Design Takeaways",
        paragraphs: [
          "Model inference is one part of the product. Capture quality, asynchronous processing, signal visualization and grounded explanations need to work together and be evaluated reproducibly.",
        ],
      },
    ],
  },
};
