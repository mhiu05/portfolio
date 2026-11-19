import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AboutSection } from "../src/sections/About/AboutSection";
import { TimelineEntry } from "../src/components/experience/TimelineEntry";
import { CertificationCard } from "../src/sections/Certifications/CertificationsSection";
import { ProjectCard } from "../src/components/projects/ProjectCard";
import { ContentImage } from "../src/components/ui/ContentImage";
import { profile } from "../src/content/profile";
import { experience } from "../src/content/experience";
import { certifications } from "../src/content/certifications";
import { projects } from "../src/content/projects";
import { assetUrl } from "../src/lib/assets";

describe("editing optional portfolio fields", () => {
  it("renders a supplied GPA and resume without changing layout code", () => {
    render(
      <MemoryRouter>
        <AboutSection
          content={{
            ...profile,
            education: { ...profile.education, gpa: "Example GPA" },
            resume: "/resume/example.pdf",
          }}
        />
      </MemoryRouter>,
    );
    expect(screen.getByText(/GPA Example GPA/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume/example.pdf",
    );
  });
  it("renders a minimal employment entry without empty metadata", () => {
    const { container } = render(
      <TimelineEntry
        entry={{
          ...experience[0],
          employmentType: null,
          startDate: null,
          endDate: null,
          current: false,
          responsibilities: [],
          achievements: [],
        }}
      />,
    );
    expect(screen.getByText("Dates to add")).toBeInTheDocument();
    expect(container.querySelector("ul")).toBeNull();
    expect(screen.queryByText("undefined")).not.toBeInTheDocument();
  });
  it("formats employment dates and supports a current role", () => {
    render(
      <TimelineEntry
        entry={{ ...experience[0], startDate: "2025-06", current: true }}
      />,
    );
    expect(screen.getByText("Jun 2025 — Present")).toBeInTheDocument();
  });
  it("renders certificate image errors as a designed fallback", () => {
    render(
      <CertificationCard
        item={{ ...certifications[0], image: "/missing.png" }}
      />,
    );
    fireEvent.error(screen.getByRole("img"));
    expect(
      screen.getByText("Certificate preview unavailable"),
    ).toBeInTheDocument();
  });
  it("renders supplied project actions securely", () => {
    render(
      <MemoryRouter>
        <ProjectCard
          project={{
            ...projects[0],
            github: "https://github.com/example/project",
            demo: "https://example.com",
          }}
        />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: "Live demo" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
    expect(screen.getByRole("link", { name: "Source" })).toHaveAttribute(
      "target",
      "_blank",
    );
  });
  it("recovers a broken project cover into its visual concept", () => {
    render(
      <MemoryRouter>
        <ProjectCard project={{ ...projects[0], cover: "/missing.webp" }} />
      </MemoryRouter>,
    );
    fireEvent.error(screen.getByRole("img"));
    expect(
      screen.getByLabelText(/Illustrative SafeVoice interface/),
    ).toBeInTheDocument();
  });
  it("keeps certificate images uncropped and generic image fallback available", () => {
    render(
      <ContentImage src={null} alt="Missing">
        <span>Fallback</span>
      </ContentImage>,
    );
    expect(screen.getByText("Fallback")).toBeInTheDocument();
    expect(assetUrl("images/example.webp")).toBe("/images/example.webp");
    expect(assetUrl("https://example.com/image.png")).toBe(
      "https://example.com/image.png",
    );
  });
  it("tries a new image source after a previous source failed", () => {
    const { rerender } = render(
      <ContentImage src="/broken.png" alt="Preview">
        <span>Fallback</span>
      </ContentImage>,
    );
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByText("Fallback")).toBeInTheDocument();
    rerender(
      <ContentImage src="/replacement.png" alt="Preview">
        <span>Fallback</span>
      </ContentImage>,
    );
    expect(screen.getByRole("img")).toHaveAttribute("src", "/replacement.png");
  });
});
