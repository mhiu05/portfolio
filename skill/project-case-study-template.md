# Project Case Study Template

Use this template for every flagship project. Fill in each field before writing prose — the fields force the decisions that make a case study strong; prose written without them tends to drift into feature-listing.

## The template

**Title** — plain-language name, not the repo's internal codename.

**One-line summary** — what it does and for whom, in under 20 words. This is the only line many readers will see; it has to stand alone.

**Problem (1–2 sentences)** — what was broken or missing, in plain language. No jargon a smart non-specialist can't follow — save the jargon for the technical-details section.

**Your role** — if this was a team project, say exactly what you owned. "Contributed to a team project" tells a reader nothing; "designed and implemented the video-processing pipeline; integrated the model into the FastAPI backend" tells them everything.

**Approach & the hardest decision** — walk through the shape of the solution, but center it on one real decision: what you chose over what, and why. This is the single highest-value sentence in the whole case study, because it's the only part that shows judgment rather than execution. Generic version: "Built a REST API with FastAPI." Strong version: "Chose FastAPI over Flask because the pipeline needed async I/O to handle concurrent video-stream requests without blocking the event loop."

**Technical challenge overcome** — the specific thing that didn't work on the first try, and how you fixed it. This is what separates "followed a tutorial" from "solved a problem."

**Result, quantified** — a number, always, if one exists: latency, accuracy, throughput, error rate, users, cost. "Reduced end-to-end latency from 800ms to 140ms" beats "made it fast" every time. If there's genuinely no number yet (early-stage project), say what the qualitative outcome was instead of inventing a stat.

**Stack** — listed, not prosed: a short row of technologies is enough; you already showed how you used them in the "approach" section above.

**Proof** — links that actually work right now: GitHub repo (with a real README — this is often the first thing a technical reader clicks), live demo, short video walkthrough if there's no easy way to click into it live, paper/write-up if one exists.

## Before / after

**Before (generic — avoid this):**

Built a chatbot using RAG and LLMs. Used LangChain, FAISS, and Google Gemini. It answers questions about documents.

This is a feature list. It proves the technologies were used, not that anything was understood or decided.

**After (specific — aim for this):**

Built a document Q&A assistant that combines dense (FAISS) and sparse (BM25) retrieval with a cross-encoder re-ranking stage before generation, because dense-only retrieval was missing exact-match queries (part numbers, specific terms) that sparse search catches. Answers are grounded in retrieved passages via Gemini through LangChain, with re-ranking measurably improving top-1 retrieval relevance over dense-only search on a held-out query set. [Repo] · [Live demo]

Same project, same stack — but the second version shows *why* the architecture looks the way it does, which is the part a reader actually remembers.

## Worked example 1 — computer vision / signal processing

**Title:** Contactless Vital-Sign Estimation from Facial Video

**One-line summary:** Estimates heart rate, HRV, and blood volume pulse from a phone or webcam video — no wearable required.

**Problem:** Continuous vital-sign monitoring normally needs contact sensors (pulse oximeters, wearables), which aren't always available or comfortable — especially for quick checks or remote/telehealth contexts.

**Your role:** Designed the end-to-end signal pipeline (face detection → ROI tracking → signal extraction → denoising) and integrated a lightweight rPPG model into a production-style microservice, rather than a notebook-only experiment.

**Approach & the hardest decision:** Chose a compact, purpose-built rPPG architecture over adapting a larger general-purpose video model, because the target was near-real-time inference on modest hardware, not offline batch accuracy — a heavier model would have scored marginally better on benchmark accuracy while being unusable for the actual use case.

**Technical challenge overcome:** Raw facial-video signal is dominated by noise from head motion and lighting changes, which swamps the actual blood-volume-pulse signal. Solved with a dedicated denoising/detrending stage in the DSP pipeline before the signal ever reaches the model, rather than trying to make the model robust to raw noisy input.

**Result, quantified:** Real-time inference on standard webcam input, with heart-rate estimates tracking within a clinically-reasonable margin of contact-sensor ground truth on validation recordings. *(Fill in your actual validation numbers here — a specific error margin against ground-truth sensor data is exactly the kind of number that makes this credible.)*

**Stack:** Python, PyTorch/ONNX Runtime, MediaPipe, FastAPI, React, Redis/Celery for async job handling.

**Proof:** [Repo with README + architecture diagram] · [Demo video, since a live webcam demo is hard to host] · [Technical report, if public]

## Worked example 2 — RAG / LLM system

**Title:** Hybrid-Retrieval Document Assistant

**One-line summary:** A document Q&A system that re-ranks hybrid retrieval results before generation, to reduce hallucinated or off-target answers.

**Problem:** Pure dense-vector retrieval misses exact-match queries (specific terms, codes, names) that show up constantly in real documents, which shows up downstream as the LLM confidently answering from the wrong passage.

**Your role:** Designed the retrieval architecture (hybrid dense + sparse + re-ranking) and the evaluation approach used to justify it.

**Approach & the hardest decision:** Added a BM25 sparse-retrieval path alongside FAISS dense retrieval, then a cross-encoder re-ranking stage over the combined candidate set — the alternative (dense-only, simpler to build) was rejected specifically because it under-performed on exact-match-style queries during early testing.

**Technical challenge overcome:** Naively merging dense and sparse candidate lists (e.g. by raw score) doesn't work because the two scores aren't on comparable scales; solved by re-ranking the merged candidate pool with a cross-encoder rather than trying to calibrate the two retrieval scores against each other.

**Result, quantified:** *(Fill in: e.g., "improved top-1 retrieval relevance by X% over dense-only retrieval on a Y-query held-out evaluation set.")* A concrete before/after number on your own eval set is worth more here than a general claim of "more accurate."

**Stack:** Python, LangChain, FAISS, BM25 (rank-bm25 or Elasticsearch), a cross-encoder re-ranker, an LLM API for generation.

**Proof:** [Repo with README] · [Live demo] · [Short write-up of the retrieval evaluation methodology, if one exists]

## Note on the two worked examples above

They're written as fill-in-the-blank templates on purpose. Replace the bracketed and italicized parts with real numbers and links — a case study is only as strong as the number it actually contains, and a placeholder number is worse than an honest "not yet measured."
