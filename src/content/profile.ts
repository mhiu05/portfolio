import type { Profile } from "../types/portfolio";

export const profile: Profile = {
  name: "Nguyen Minh Hieu",
  initials: "Nguyen Minh Hieu",
  role: "AI Engineer",
  introduction: "Curious by nature. Engineer by practice.",
  headline: ["I build AI Agents", "that works."],
  bio: "I'm a Computer Science student at PTIT, focused on AI Engineering. I build AI agents, multi-agent systems, and intelligent applications that solve real-world problems.",
  education: {
    institution: "Posts and Telecommunications Institute of Technology",
    shortName: "PTIT",
    major: "Computer Science",
    gpa: "3.32",
  },
  agentEngineering: [
    {
      title: "Building agents. Automating workflows.",
      description:
        "I build AI agents and automate workflows to simplify everyday tasks, connect tools and turn ideas into practical applications.",
      status: "AI Agents · Workflow Automation · AI Applications",
    },
  ],
  workflow: ["Understand", "Design", "Build", "Evaluate", "Iterate"],
  workflowDescription: "Good questions. Thoughtful systems. Useful outcomes.",
  interests: [
    "AI agents",
    "LLM applications",
    "Backend systems",
    "Agent evaluation",
  ],
  resume: null,
  contactHeading: "Let's build something meaningful.",
  contactDescription:
    "Interested in intelligent systems and the engineering behind them? Let’s connect on GitHub.",
};
