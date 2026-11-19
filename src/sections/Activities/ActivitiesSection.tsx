import { activities } from "../../content/activities";
import { site } from "../../content/site";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ContentImage } from "../../components/ui/ContentImage";
import { assetUrl } from "../../lib/assets";

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      aria-labelledby="activities-heading"
      className="activities-section section-space"
    >
      <Container>
        <SectionHeading {...site.sectionLabels.activities} id="activities-heading" />
        {activities.length ? (
          <div className="activities-grid">
            {activities.map((activity) => (
              <article className="activity-entry" key={activity.id} data-reveal>
                <a
                  className="activity-image-link"
                  href={assetUrl(activity.image)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${activity.title} image`}
                >
                  <ContentImage src={activity.image} alt={activity.imageAlt}>
                    <span>Activity image unavailable</span>
                  </ContentImage>
                </a>
                <div className="activity-meta">
                  <span>{activity.organization}</span>
                  {activity.date && <span>{activity.date}</span>}
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="editorial-note" data-reveal>{site.notes.activities}</p>
        )}
      </Container>
    </section>
  );
}
