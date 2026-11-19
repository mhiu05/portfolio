import { profile } from "./profile";
export const site = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} — ${profile.bio}`,
  // Set the actual public origin before deployment to generate canonical URLs and sitemap.xml.
  url: null as string | null,
  sectionLabels: {
    projects: {
      title: "Selected Work",
      subtitle: "Things I've built.",
      description:
        "From intelligent products to the infrastructure that makes them possible. A closer look at the problems I’m exploring.",
    },
    experience: {
      title: "Work Experience",
      subtitle: "Where I've worked.",
      description: "The teams, problems and contributions along the way.",
    },
    certifications: {
      title: "Achievement",
      subtitle: "Continuous learning.",
      description: "Building foundations. Staying curious.",
    },
    activities: {
      title: "Activities",
      subtitle: "Learning, sharing and getting involved.",
    },
    toolkit: {
      title: "Engineering Toolkit",
    },
  },
  notes: {
    activities: "Activities will be added here.",
  },
  diagram: {
    title: "From intent to action.",
    subtitle:
      "Orchestrating multiple agents, tools, and context with OpenAI Agents SDK.",
    input: "User request",
    orchestrator: "Agent Orchestrator (Runner)",
    orchestratorDetail: "Plan · Delegate · Orchestrate · Aggregate",
    handoff: "Handoffs",
    agents: [
      {
        id: "research",
        title: "Research Agent",
        detail: "Search · Retrieve · Summarize",
      },
      {
        id: "analysis",
        title: "Analysis Agent",
        detail: "Reason · Analyze · Plan",
      },
      {
        id: "action",
        title: "Action Agent",
        detail: "Call tools · Execute · Take action",
      },
    ],
    output: "Final response",
    resourcesLabel: "Connected resources",
    resources: [
      { id: "models", title: "Models", detail: "GPT-6, GPT-6.1" },
      {
        id: "tools",
        title: "Tools & APIs",
        detail: "Web search, code, I/O, ...",
      },
      {
        id: "memory",
        title: "Memory & Context",
        detail: "Session · Persistent · Retrieval",
      },
    ],
    blocksLabel: "Core building blocks",
    blocksSource: "from OpenAI Agents SDK",
    blocks: [
      {
        id: "agent",
        title: "Agent",
        detail: "Goal, instructions, tools, and handoffs",
      },
      {
        id: "tools",
        title: "Tools",
        detail: "Extend agent capabilities (e.g., search, code, APIs).",
      },
      {
        id: "handoffs",
        title: "Handoffs",
        detail: "Delegate tasks between specialized agents.",
      },
      {
        id: "guardrails",
        title: "Guardrails",
        detail: "Validate inputs/outputs and keep the system safe.",
      },
      {
        id: "tracing",
        title: "Tracing",
        detail: "Observe, debug, and evaluate agent runs.",
      },
    ],
  },
  visuals: {
    mood: {
      title: "Your story, at your own pace.",
      description:
        "An illustrative fallback for the SafeVoice student-support interface.",
      label: "Student support / concept",
      chips: ["Understand", "Record", "Plan"],
      prompt: "What happened, and where would you like to start?",
      reply: "Organize what happened. Prepare to talk with someone you trust.",
    },
    analytics: {
      label: "Analytics workflow / concept",
      steps: ["Question", "Analyze", "Report"],
    },
    vitals: {
      label: "rPPG workflow / concept",
      steps: ["Webcam", "Face ROI", "BVP", "Vitals"],
    },
    cache: {
      label: "Selective recovery / concept",
      steps: ["Context", "Prune", "Recover"],
    },
  },
  caseStudy: {
    note: "This is an editable project brief. Concepts and investigation topics below are not verified implementation claims.",
    evidenceNote:
      "No benchmark results or implementation evidence have been supplied.",
    back: "All projects",
  },
  footer: "Built with curiosity. Engineered with care.",
};
