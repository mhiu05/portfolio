import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import type { WorkExperience } from "../../types/portfolio";
import { ContentImage } from "../ui/ContentImage";
import { TechBadge } from "../ui/TechBadge";
import { ExternalLink } from "../ui/ExternalLink";
function formatDate(value: string) {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match || +match[2] < 1 || +match[2] > 12) return value;
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}-01T00:00:00Z`));
}
export function TimelineEntry({ entry }: { entry: WorkExperience }) {
  const dates = entry.startDate
    ? `${formatDate(entry.startDate)} — ${entry.current ? "Present" : entry.endDate ? formatDate(entry.endDate) : "End date to add"}`
    : "Dates to add";
  return (
    <article className="timeline-entry" data-reveal>
      <div className="timeline-date">
        <span className="timeline-point" />
        {dates}
        {entry.placeholder && <span className="sample-tag">Placeholder</span>}
      </div>
      <div className="timeline-content">
        <div className="employer-row">
          <span className="company-logo">
            <ContentImage src={entry.logo} alt={`${entry.company} logo`}>
              <Building2 size={24} />
            </ContentImage>
          </span>
          <div>
            <h3>
              {entry.website ? (
                <ExternalLink href={entry.website}>
                  {entry.company}
                  <ArrowUpRight size={17} />
                </ExternalLink>
              ) : (
                entry.company
              )}
            </h3>
            <p className="job-role">{entry.role}</p>
          </div>
        </div>
        <div className="job-meta">
          {entry.employmentType && <span>{entry.employmentType}</span>}
          {entry.location && (
            <span>
              <MapPin size={13} />
              {entry.location}
            </span>
          )}
        </div>
        {!!entry.responsibilities.length && (
          <ul className="responsibilities">
            {entry.responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        )}
        {!!entry.achievements.length && (
          <ul className="achievements">
            {entry.achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        {!!entry.technologies.length && (
          <div className="tech-list">
            {entry.technologies.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
