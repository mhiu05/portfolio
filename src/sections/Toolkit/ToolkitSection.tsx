import {
  ArrowUpRight,
  Bot,
  Cloud,
  CodeXml,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toolkit } from "../../content/toolkit";
import { projects } from "../../content/projects";
import { site } from "../../content/site";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
const icons: Record<string, LucideIcon> = {
  "ai-agent": Bot,
  web: CodeXml,
  infra: Cloud,
  tools: Zap,
};
export function ToolkitSection() {
  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-heading"
      className="toolkit-section section-space"
    >
      <Container>
        <SectionHeading {...site.sectionLabels.toolkit} id="toolkit-heading" />
        <div className="toolkit-groups">
          {toolkit.map((group) => {
            const Icon = icons[group.id] ?? Bot;
            return (
              <div className="toolkit-group" key={group.id} data-reveal>
                <div className="toolkit-heading">
                  <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  <h3>{group.title}</h3>
                  {group.description && <p>{group.description}</p>}
                </div>
                <div className="tool-tags">
                  {group.tools.map((tool) => {
                    const project = projects.find((p) =>
                      tool.projectSlugs?.includes(p.slug),
                    );
                    return project ? (
                      <Link
                        key={tool.name}
                        to={`/projects/${project.slug}`}
                        aria-label={`${tool.name} — ${project.name} project brief`}
                        title={`Listed stack: ${project.name}; implementation awaiting review`}
                      >
                        {tool.name}
                        <ArrowUpRight size={13} />
                      </Link>
                    ) : (
                      <span key={tool.name}>{tool.name}</span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
