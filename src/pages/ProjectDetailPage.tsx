import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../content/projects";
import { profile } from "../content/profile";
import { site } from "../content/site";
import { usePage } from "../hooks/usePage";
import { usePageMotion } from "../components/animations/usePageMotion";
import { PageLayout } from "../components/layout/PageLayout";
import { Container } from "../components/ui/Container";
import { ExternalLink } from "../components/ui/ExternalLink";
import { TechBadge } from "../components/ui/TechBadge";
import { ProjectVisual } from "../components/projects/ProjectVisual";
import {
  ArchitectureDiagram,
  CaseStudySection,
} from "../components/projects/CaseStudySection";
import type { Project } from "../types/portfolio";
import NotFoundPage from "./NotFoundPage";
function ProjectStudy({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  usePage(`${project.name} — ${profile.name}`, project.summary);
  usePageMotion(ref);
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const blocks = project.caseStudy.sections;
  return (
    <PageLayout>
      <div ref={ref} className="project-page">
        <Container>
          <Link to="/#projects" className="text-link study-back">
            <ArrowLeft size={17} />
            {site.caseStudy.back}
          </Link>
          <header className="study-header" data-intro>
            <div className="study-category">{project.category}</div>
            <h1>{project.name}</h1>
            <p>{project.caseStudy.introduction}</p>
            <div className="study-meta">
              <span className="project-status">
                <span className="status-dot" />
                {project.status}
              </span>
              {project.role && <span>{project.role}</span>}
            </div>
            <div className="tech-list">
              {project.technologies.map((t) => (
                <TechBadge key={t}>{t}</TechBadge>
              ))}
            </div>
            <div className="project-actions">
              {project.github && (
                <ExternalLink
                  href={project.github}
                  className="button button-primary"
                >
                  Source code <ArrowUpRight size={18} />
                </ExternalLink>
              )}
              {project.demo && (
                <ExternalLink
                  href={project.demo}
                  className="button button-secondary"
                >
                  Live demo <ArrowUpRight size={18} />
                </ExternalLink>
              )}
            </div>
          </header>
          <ProjectVisual project={project} large />
          <p className="editorial-note study-disclosure">
            {project.caseStudy.note ?? site.caseStudy.note}
          </p>
          <div className="study-body">
            <aside className="study-index">
              <span>Inside the project</span>
              <nav aria-label="Case study sections">
                <Link to={{ hash: "#overview" }}>Overview</Link>
                {blocks.slice(0, 2).map((b) => (
                  <Link key={b.id} to={{ hash: `#${b.id}` }}>
                    {b.title}
                  </Link>
                ))}
                {project.caseStudy.architecture && (
                  <Link to={{ hash: "#architecture" }}>
                    System Architecture
                  </Link>
                )}
                {blocks.slice(2).map((b) => (
                  <Link key={b.id} to={{ hash: `#${b.id}` }}>
                    {b.title}
                  </Link>
                ))}
              </nav>
            </aside>
            <div className="study-content">
              <CaseStudySection
                block={{
                  id: "overview",
                  title: "Overview",
                  paragraphs: [project.summary],
                  bullets: project.highlights,
                }}
              />
              {blocks.slice(0, 2).map((block) => (
                <CaseStudySection block={block} key={block.id} />
              ))}
              {project.caseStudy.architecture && (
                <ArchitectureDiagram
                  architecture={project.caseStudy.architecture}
                />
              )}
              {blocks.slice(2).map((block) => (
                <CaseStudySection block={block} key={block.id} />
              ))}
            </div>
          </div>
          <Link className="next-project" to={`/projects/${next.slug}`}>
            <div>
              <span>Keep exploring</span>
              <h2>{next.name}</h2>
            </div>
            <ArrowRight size={32} />
          </Link>
        </Container>
      </div>
    </PageLayout>
  );
}
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  return project ? (
    <ProjectStudy key={project.id} project={project} />
  ) : (
    <NotFoundPage />
  );
}
