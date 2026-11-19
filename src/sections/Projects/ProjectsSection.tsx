import { projects } from "../../content/projects";
import { site } from "../../content/site";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ProjectCard } from "../../components/projects/ProjectCard";
export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="projects-section section-space"
    >
      <Container>
        <SectionHeading
          {...site.sectionLabels.projects}
          id="projects-heading"
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
