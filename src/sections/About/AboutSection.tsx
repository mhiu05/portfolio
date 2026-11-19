import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Bot,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Profile } from "../../types/portfolio";
import { socialDisplay, socialLinks } from "../../content/social";
import { Container } from "../../components/ui/Container";
import { ExternalLink } from "../../components/ui/ExternalLink";
import { AgentDiagram } from "../../components/animations/AgentDiagram";
import { assetUrl } from "../../lib/assets";
export function AboutSection({ content }: { content: Profile }) {
  return (
    <section id="about" aria-labelledby="hero-title" className="about-section">
      <Container>
        <div className="hero-meta" data-intro>
          <p>
            <span className="status-dot" />
            {content.role}
          </p>
          <span>{content.introduction}</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-name" data-intro>
              Hello, I’m {content.name}{" "}
              <span className="name-line" aria-hidden="true" />
            </p>
            <h1 id="hero-title" data-intro>
              {content.headline[0]} <br />
              <span className="headline-highlight">
                {content.headline[1]}
                <svg
                  viewBox="0 0 420 20"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 14Q180 0 418 9" />
                </svg>
              </span>
            </h1>
            <p className="hero-bio" data-intro>
              {content.bio}
            </p>
            <div className="hero-actions" data-intro>
              <Link className="button button-primary" to="/#projects">
                Explore Projects <ArrowDownRight size={19} />
              </Link>
              {content.resume && (
                <a
                  href={assetUrl(content.resume)}
                  className="button button-secondary"
                >
                  Resume <ArrowUpRight size={18} />
                </a>
              )}
              {socialLinks
                .filter((s) => s.url && s.kind !== "email" && s.kind !== "phone")
                .map((s) => (
                  <ExternalLink key={s.id} className="text-link" href={s.url!}>
                    {s.label}
                    <ArrowUpRight size={17} />
                  </ExternalLink>
                ))}
            </div>
            <ul className="hero-contact" data-intro>
              {socialLinks
                .filter((s) => s.url && (s.kind === "email" || s.kind === "phone"))
                .map((s) => (
                  <li key={s.id}>
                    <a href={s.url!} className="hero-contact-link">
                      {s.kind === "phone" ? (
                        <Phone size={15} aria-hidden="true" />
                      ) : (
                        <Mail size={15} aria-hidden="true" />
                      )}
                      {socialDisplay(s)}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <AgentDiagram />
        </div>
        <div className="about-details">
          <div className="about-detail" data-reveal>
            <div className="detail-title">
              <GraduationCap size={20} />
              <h2>Education</h2>
            </div>
            <h3>{content.education.shortName}</h3>
            <p>{content.education.institution}</p>
            <span className="detail-foot">
              {content.education.major}
              {content.education.gpa && ` · GPA ${content.education.gpa}`}
            </span>
          </div>
          <div className="about-detail" data-reveal>
            <div className="detail-title">
              <Bot size={19} />
              <h2>Agent Engineering</h2>
            </div>
            {content.agentEngineering.map((r) => (
              <div key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                <span className="detail-foot">{r.status}</span>
              </div>
            ))}
          </div>
          <div className="about-detail how-i-work" data-reveal>
            <div className="detail-title">
              <ArrowUpRight size={20} />
              <h2>How I Work</h2>
            </div>
            <div className="workflow">
              {content.workflow.map((step, i) => (
                <span key={step}>
                  {step}
                  {i !== content.workflow.length - 1 && (
                    <ArrowRight size={14} aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
            <p>{content.workflowDescription}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
