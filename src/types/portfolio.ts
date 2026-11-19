export interface Education {
  institution: string;
  shortName: string;
  major: string;
  gpa?: string | null;
}
export interface AgentEngineeringFocus {
  title: string;
  description: string;
  status: string;
}
export interface Profile {
  name: string;
  initials: string;
  role: string;
  introduction: string;
  headline: [string, string];
  bio: string;
  education: Education;
  agentEngineering: AgentEngineeringFocus[];
  workflow: string[];
  workflowDescription: string;
  resume: string | null;
  interests: string[];
  contactHeading: string;
  contactDescription: string;
}
export interface SocialLink {
  id: string;
  label: string;
  kind: "github" | "linkedin" | "email" | "phone";
  url: string | null;
}
export interface DiagramNode {
  id: string;
  title: string;
  detail: string;
}
export interface Architecture {
  label: string;
  description: string;
  nodes: DiagramNode[];
}
export interface CaseStudyBlock {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  placeholder?: boolean;
  code?: { language: string; text: string };
  table?: { headers: string[]; rows: string[][] };
}
export interface ProjectCaseStudy {
  note?: string;
  introduction: string;
  sections: CaseStudyBlock[];
  architecture: Architecture | null;
}
export interface Project {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  role: string | null;
  technologies: string[];
  status: string;
  featured: boolean;
  cover: string | null;
  coverAlt: string;
  visual: "mood" | "analytics" | "vitals" | "cache";
  github: string | null;
  demo: string | null;
  highlights: string[];
  caseStudy: ProjectCaseStudy;
}
export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  employmentType: string | null;
  location: string | null;
  startDate: string | null;
  endDate: string | null;
  current?: boolean;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo: string | null;
  website: string | null;
  placeholder?: boolean;
}
export interface Certification {
  id: string;
  title: string;
  organization: string;
  category:
    | "Certification"
    | "Award"
    | "Training Program"
    | "Academic Program"
    | "Achievement";
  date: string | null;
  description: string;
  image: string | null;
  verificationUrl: string | null;
  status: string;
}
export interface ToolkitCategory {
  id: string;
  title: string;
  description?: string;
  tools: { name: string; projectSlugs?: string[] }[];
}
