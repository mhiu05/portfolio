export interface Activity {
  id: string;
  title: string;
  description: string;
  organization: string;
  date: string | null;
  image: string;
  imageAlt: string;
}

export const activities: Activity[] = [
  {
    id: "codex-hackathon-2026",
    title: "Codex Community Hackathon",
    organization: "Codex Community · Hanoi",
    date: "2026",
    description:
      "Joined a community hackathon, collaborating with fellow participants and discussing project ideas and implementation around a live demo.",
    image: "/images/activities/codex-hackathon-2026.jpg",
    imageAlt: "Participants gathered around laptops during a Codex community hackathon",
  },
  {
    id: "olympic-ai-ptit-2026",
    title: "Olympic AI PTIT 2026 — Finalist",
    organization: "PTIT · Faculty of Artificial Intelligence",
    date: "Sep 14, 2026",
    description:
      "Reached the final round of Olympic AI PTIT 2026 in the PTIT student division with team train & pray, alongside Tran Van Khanh and Phan Viet Bao.",
    image: "/images/activities/OAI.png",
    imageAlt: "Certificate recognizing team train & pray as finalists in Olympic AI PTIT 2026",
  },
  {
    id: "icpc-ptit-2025",
    title: "ICPC PTIT 2025 — Final Round",
    organization: "Posts and Telecommunications Institute of Technology",
    date: "2025",
    description:
      "Participated in the final round of ICPC PTIT 2025 with team Nghĩ tên khác đi, working together on competitive programming problems.",
    image: "/images/activities/ICPC-PTIT-2026.jpg",
    imageAlt: "ICPC PTIT competitors and a finalist badge identifying Nguyen Minh Hieu and the 2025 event",
  },
];
