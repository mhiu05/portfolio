import { ArrowUpRight, Award, FileCheck2 } from "lucide-react";
import { certifications } from "../../content/certifications";
import { site } from "../../content/site";
import { Container } from "../../components/ui/Container";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { ContentImage } from "../../components/ui/ContentImage";
import { ExternalLink } from "../../components/ui/ExternalLink";
import type { Certification } from "../../types/portfolio";
import { assetUrl } from "../../lib/assets";
export function CertificationCard({ item }: { item: Certification }) {
  return (
    <article className="certificate-card" data-reveal>
      <div className="certificate-visual">
        <ContentImage src={item.image} alt={`${item.title} certificate`}>
          <div className="certificate-placeholder">
            <div className="certificate-sheet">
              <Award size={34} strokeWidth={1.2} />
              <span className="certificate-rule" />
              <span className="certificate-rule short" />
              <FileCheck2 size={19} strokeWidth={1.2} />
            </div>
            <span>Certificate preview unavailable</span>
          </div>
        </ContentImage>
      </div>
      <div className="certificate-info">
        <span className="certificate-org">
          {item.organization}
          {item.date && ` · ${item.date}`}
        </span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="certificate-status">
          <span>{item.status}</span>
          {item.image && (
            <a href={assetUrl(item.image)} target="_blank" rel="noopener noreferrer">
              View certificate <ArrowUpRight size={16} />
            </a>
          )}
          {item.verificationUrl && (
            <ExternalLink href={item.verificationUrl}>
              Verify credential <ArrowUpRight size={16} />
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}
export function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="certifications-section section-space"
    >
      <Container>
        <SectionHeading
          {...site.sectionLabels.certifications}
          id="certifications-heading"
        />
        <div className="certifications-grid">
          {certifications.map((item) => (
            <CertificationCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
