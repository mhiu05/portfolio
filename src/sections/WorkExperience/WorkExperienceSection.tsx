import { experience } from "../../content/experience";
import { site } from "../../content/site";
import { TimelineEntry } from "../../components/experience/TimelineEntry";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
export function WorkExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="experience-section section-space"
    >
      <Container>
        <SectionHeading
          {...site.sectionLabels.experience}
          id="experience-heading"
        />
        <div className="timeline">
          <div className="timeline-track" aria-hidden="true">
            <span className="timeline-progress" />
          </div>
          {experience.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </Container>
    </section>
  );
}
