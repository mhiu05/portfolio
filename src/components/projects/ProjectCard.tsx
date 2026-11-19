import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/portfolio";
import { ProjectVisual } from "./ProjectVisual";
import { TechBadge } from "../ui/TechBadge";
import { ExternalLink } from "../ui/ExternalLink";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card ${project.featured ? "featured-project" : ""}`}
      data-reveal
    >
      <Link
        className="project-visual-link"
        to={`/projects/${project.slug}`}
        aria-label={`Explore ${project.name}`}
      >
        <ProjectVisual project={project} large={project.featured} />
        <span className="visual-open" aria-hidden="true">
          <ArrowUpRight size={23} />
        </span>
      </Link>
      <div className="project-info">
        <div className="project-category">{project.category}</div>
        <div className="project-title-row">
          <h3>
            <Link to={`/projects/${project.slug}`}>{project.name}</Link>
          </h3>
          <span className="project-status">
            <span className="status-dot" />
            {project.status}
          </span>
        </div>
        <p className="project-summary">{project.summary}</p>
        {project.role && <p className="project-role">Role: {project.role}</p>}
        {project.featured && (
          <ul className="project-highlights">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        {!!project.technologies.length && (
          <div className="tech-list">
            {project.technologies.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        )}
        <div className="project-actions">
          <Link to={`/projects/${project.slug}`} className="text-link">
            Read project brief <ArrowUpRight size={16} />
          </Link>
          {project.github && (
            <ExternalLink href={project.github} className="text-link">
              Source <ArrowUpRight size={16} />
            </ExternalLink>
          )}
          {project.demo && (
            <ExternalLink href={project.demo} className="text-link">
              Live demo <ArrowUpRight size={16} />
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
