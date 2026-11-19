import type { Project } from "../../types/portfolio";
export const vdaagent: Project = {
  id: "vdaagent",
  slug: "vdaagent",
  name: "VDaAgent",
  category: "AI Agent / Analytics System",
  summary:
    "A multi-agent analytics workspace for exploring real estate data through natural-language conversations, Python analysis, charts and source-backed reports.",
  role: null,
  technologies: [
    "Python", "FastAPI", "React", "TypeScript", "PostgreSQL",
    "Docker", "SSE", "Langfuse",
  ],
  status: "In development",
  featured: false,
  cover: "/images/projects/vdaagent/dashboard.png",
  coverAlt:
    "VDaAgent dashboard in frontend mock mode, showing real estate inventory filters, sample metrics and charts",
  visual: "analytics",
  github: "https://github.com/mhiu05/VDaAgent",
  demo: null,
  highlights: [
    "Lead & specialist agents",
    "Python workspaces & data tools",
    "Versioned reports & dashboards",
  ],
  caseStudy: {
    note:
      "Based on the repository documentation. The dashboard screenshot uses mock data from the repository; it does not show live warehouse data or verified model output. Runtime and evaluation results were not independently reproduced for this portfolio.",
    introduction:
      "VDaAgent provides a conversational workspace where a lead agent coordinates specialists to explore data, compare results, create charts and publish reports. The public repository demonstrates the workflow with a sample real estate domain.",
    architecture: {
      label: "Repository architecture",
      description:
        "React communicates with FastAPI over REST and SSE. The backend owns authentication, task queues and the agent harness. Agents execute Python through execd workspaces, access domain-configured data sources and publish datasets or reports. PostgreSQL stores application state; files and report artifacts live in volumes, with model traces sent to Langfuse.",
      nodes: [
        { id: "question", title: "React workspace", detail: "Chat, dashboard & reports" },
        {
          id: "tools",
          title: "FastAPI harness",
          detail: "Auth, routing, tasks & SSE",
        },
        {
          id: "analysis",
          title: "Agent workspaces",
          detail: "Python, tools & domain data",
        },
        { id: "report", title: "Data & artifacts", detail: "PostgreSQL & versioned reports" },
      ],
    },
    sections: [
      {
        id: "problem",
        title: "Problem & Motivation",
        paragraphs: [
          "Real estate analysis often requires moving between source data, queries, charts and written reports. VDaAgent brings those steps into a conversation, with specialist agents sharing the work and preserving outputs for review.",
        ],
      },
      {
        id: "contribution",
        title: "My Contribution",
        paragraphs: [
          "The project includes a conversational analytics interface, an agent runtime and reporting workflows. Individual component ownership has not yet been documented.",
        ],
      },
      {
        id: "implementation",
        title: "Technical Implementation",
        paragraphs: [
          "The React and TypeScript frontend provides chat, dashboards, agent management and a report viewer. A Python/FastAPI backend coordinates the agent harness, application state and asynchronous tasks.",
        ],
        bullets: [
          "A lead agent delegates to specialists for data preparation, comparisons, insights, charts and reports.",
          "Agents run Python through execd with resource limits and domain-specific credentials and instructions.",
          "REST and SSE expose task state and public progress to the browser, separate from internal tool output.",
          "Published datasets feed dashboards; versioned reports preserve their evidence and attached artifacts.",
          "Docker Compose packages the services, PostgreSQL stores application state and Langfuse records model traces.",
        ],
      },
      {
        id: "challenges",
        title: "Engineering Challenges",
        paragraphs: [
          "The documented architecture addresses coordination between specialist agents, context growth and the separation of user conversations from execution details. Data access also depends on domain configuration, permissions and successful agent provisioning.",
        ],
      },
      {
        id: "tradeoffs",
        title: "Solutions and Trade-offs",
        paragraphs: [
          "Domain templates group data access, instructions and starter agents, allowing the same platform to serve different analytical contexts. Each domain still needs its own data, queries and guidance.",
          "The harness limits concurrent work per team owner, while Python execution is separated into workspaces. The repository notes that scaling backend replicas and fully isolating untrusted execution need further engineering.",
        ],
      },
      {
        id: "results",
        title: "Results & Evidence",
        paragraphs: [
          "The repository provides dashboard and report-viewer screenshots, setup instructions, a frontend mock mode, deterministic FakeModel integration tests and CI configuration. The cover image shows that mock frontend, with sample real estate inventory data.",
          "These artifacts demonstrate the product and its testing paths. They do not establish live warehouse accuracy or analytical quality; the evaluation runner is documented as unfinished, and no benchmark or deployment result is claimed here.",
        ],
      },
      {
        id: "lessons",
        title: "Design Takeaways",
        paragraphs: [
          "A useful analytics agent needs more than a chat response: explicit task state, controlled data access and outputs that can be inspected again. VDaAgent organizes those concerns around agent teams, published datasets and versioned reports.",
        ],
      },
    ],
  },
};
