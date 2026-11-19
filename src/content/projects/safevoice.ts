import type { Project } from "../../types/portfolio";
export const safevoice: Project = {
  id: "safevoice",
  slug: "safevoice",
  name: "SafeVoice",
  category: "AI Product / Student Support",
  summary:
    "A Vietnamese student-support app that connects AI conversations with incident records, private evidence and action plans to help students prepare to seek support.",
  role: null,
  technologies: [
    "Python",
    "FastAPI",
    "OpenAI Agents SDK",
    "React",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "pgvector",
  ],
  status: "In development",
  featured: true,
  cover: "/images/projects/safevoice/chat-desktop.png",
  coverAlt:
    "SafeVoice AI Companion in frontend demo mode, showing a new conversation and an unsent draft with fictional student data",
  visual: "mood",
  github: "https://github.com/mhiu05/SafeVoice",
  demo: null,
  highlights: [
    "Context-aware AI companion",
    "User-approved tools & memory",
    "Incident records & action plans",
  ],
  caseStudy: {
    note:
      "Based on the SafeVoice repository and README. The screenshot shows the frontend demo with fictional data, an unsent draft and no live AI response. Backend integration and live-model quality were not independently tested for this portfolio.",
    introduction:
      "SafeVoice helps Vietnamese students aged 11–17 make sense of bullying situations, record what happened and prepare to talk with a trusted adult. Its AI Companion connects conversations with personal records and plans, with user approval before proposed changes are saved.",
    architecture: {
      label: "Repository architecture",
      description:
        "React calls FastAPI over HTTP and SSE. The Agent runtime runs inside the same Python process and uses backend service contracts. Supabase provides Auth, PostgreSQL and private Storage; retrieval combines pgvector and keyword search. The diagram summarizes these boundaries rather than every service connection.",
      nodes: [
        {
          id: "interface",
          title: "React interface",
          detail: "Connected & offline demo adapters",
        },
        { id: "api", title: "FastAPI", detail: "JWT, domain services & SSE" },
        {
          id: "agents",
          title: "Agent runtime",
          detail: "Companion, tools & approvals",
        },
        {
          id: "storage",
          title: "Data & knowledge",
          detail: "PostgreSQL, Storage & retrieval",
        },
      ],
    },
    sections: [
      {
        id: "problem",
        title: "Problem & Motivation",
        paragraphs: [
          "Students experiencing bullying may struggle to explain what happened or decide whom to approach. SafeVoice brings conversation, incident timelines, evidence and practical next steps into one Vietnamese-language workspace, so students can organize their story at their own pace.",
          "The product supports preparation and reflection. Incident records capture the student's account; they are not verified findings. AI does not replace a trusted adult or professional support.",
        ],
      },
      {
        id: "contribution",
        title: "My Contribution",
        paragraphs: [
          "The repository documents frontend, backend and Agent packages. Individual ownership and the specific components contributed by the portfolio owner have not yet been documented.",
        ],
        placeholder: true,
      },
      {
        id: "implementation",
        title: "Technical Implementation",
        paragraphs: [
          "The React and TypeScript frontend uses ports and adapters to separate connected HTTP services from an offline demo. FastAPI owns authentication checks, transactions, uploads and persistence; the OpenAI Agents SDK runtime calls domain operations through shared contracts.",
        ],
        bullets: [
          "SSE streams public conversation and tool events, with stop, retry and interrupted-run recovery flows.",
          "Proposed record changes and persistent memories require user approval before they are saved.",
          "Private evidence uploads support pause/resume and temporary download URLs; AI image analysis requires consent.",
          "Knowledge retrieval combines pgvector with keyword search, versioned ingestion and citation checks.",
        ],
      },
      {
        id: "challenges",
        title: "Engineering Challenges",
        paragraphs: [
          "The documented design addresses sensitive student records, interrupted conversations and the boundary between an AI suggestion and a persisted change.",
        ],
        bullets: [
          "Keep record ownership and database access checks on the backend, with PostgreSQL row-level security.",
          "Expose public streaming events without leaking private reasoning or internal tool payloads.",
          "Keep browser demo data separate from connected accounts and make simulated features explicit.",
        ],
      },
      {
        id: "tradeoffs",
        title: "Solutions and Trade-offs",
        paragraphs: [
          "The API and Agent runtime share one Python process, while service contracts preserve a boundary between orchestration and persistence. This avoids a separate Agent service deployment while keeping runtime tests independent of backend database infrastructure.",
          "An offline demo makes the interface explorable without backend credentials or paid providers. Its scripted chat, image analysis and roleplay demonstrate interaction design; connected model behavior requires separate configuration and evaluation.",
        ],
      },
      {
        id: "results",
        title: "Results & Evidence",
        paragraphs: [
          "The linked repository includes frontend demo screenshots, setup instructions, Vitest and Playwright coverage, and backend, Agent and database test suites. These are available for inspection; the SafeVoice suites were not rerun as part of this portfolio update.",
          "The screenshot above comes from the repository's frontend demo, using fictional data and no live model response. The repository also documents local connected flows; no production deployment, benchmark or student outcome is claimed here.",
        ],
        bullets: [
          "School Admin and voice interactions are simulations.",
          "The support UI prepares drafts for users to share themselves; it does not automatically send email, SMS or school reports.",
        ],
      },
      {
        id: "lessons",
        title: "Design Takeaways",
        paragraphs: [
          "SafeVoice illustrates why approval boundaries, explicit demo modes and shared client/server contracts matter in an AI product handling sensitive records. Live-model quality and operational support workflows still need evaluation before use with real student data.",
        ],
      },
    ],
  },
};
