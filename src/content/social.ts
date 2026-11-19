import type { SocialLink } from "../types/portfolio";
export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    kind: "github",
    url: "https://github.com/mhiu05",
  },
  { id: "phone", label: "Phone", kind: "phone", url: "tel:+84375049906" },
  {
    id: "email",
    label: "Email",
    kind: "email",
    url: "mailto:minhhieuhh2k5@gmail.com",
  },
  { id: "linkedin", label: "LinkedIn", kind: "linkedin", url: null },
];

export function socialDisplay(link: SocialLink) {
  if (link.kind === "email" && link.url) {
    return link.url.replace(/^mailto:/i, "");
  }
  if (link.kind === "phone" && link.url) {
    const raw = link.url.replace(/^tel:/i, "");
    const match = raw.match(/^(\+84)(\d{3})(\d{3})(\d{3})$/);
    return match ? `${match[1]} ${match[2]} ${match[3]} ${match[4]}` : raw;
  }
  return link.label;
}
