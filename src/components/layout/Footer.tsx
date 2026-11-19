import { ArrowUp, ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../content/profile";
import { site } from "../../content/site";
import { socialDisplay, socialLinks } from "../../content/social";
import { assetUrl } from "../../lib/assets";
import { ExternalLink } from "../ui/ExternalLink";
import { Container } from "../ui/Container";
export function Footer() {
  return (
    <footer id="contact" className="site-footer" tabIndex={-1}>
      <Container>
        <div className="contact-main">
          <div>
            <h2>{profile.contactHeading}</h2>
            <p>{profile.contactDescription}</p>
          </div>
          <div className="contact-actions">
            {socialLinks
              .filter((s) => s.url)
              .map((s) => (
                <ExternalLink key={s.id} href={s.url!} className="contact-link">
                  {s.kind === "github" && <Github size={21} aria-hidden="true" />}
                  {s.kind === "email" && <Mail size={21} aria-hidden="true" />}
                  {s.kind === "phone" && <Phone size={21} aria-hidden="true" />}
                  <span>{socialDisplay(s)}</span>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </ExternalLink>
              ))}
            {profile.resume && (
              <a className="contact-link" href={assetUrl(profile.resume)}>
                Resume <ArrowUpRight size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <Link to="/" className="footer-name">
            {profile.name}
            <span>.</span>
          </Link>
          <span>{site.footer}</span>
          <Link className="back-top" to="/#about">
            Back to top <ArrowUp size={16} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
