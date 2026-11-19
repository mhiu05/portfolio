import { useRef } from "react";
import { profile } from "../content/profile";
import { site } from "../content/site";
import { usePage } from "../hooks/usePage";
import { usePageMotion } from "../components/animations/usePageMotion";
import { PageLayout } from "../components/layout/PageLayout";
import { AboutSection } from "../sections/About/AboutSection";
import { ProjectsSection } from "../sections/Projects/ProjectsSection";
import { WorkExperienceSection } from "../sections/WorkExperience/WorkExperienceSection";
import { CertificationsSection } from "../sections/Certifications/CertificationsSection";
import { ToolkitSection } from "../sections/Toolkit/ToolkitSection";
import { ActivitiesSection } from "../sections/Activities/ActivitiesSection";
export default function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  usePage(site.title);
  usePageMotion(ref);
  return (
    <PageLayout>
      <div ref={ref}>
        <AboutSection content={profile} />
        <ProjectsSection />
        <WorkExperienceSection />
        <CertificationsSection />
        <ActivitiesSection />
        <ToolkitSection />
      </div>
    </PageLayout>
  );
}
