import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "../src/App";
import { profile } from "../src/content/profile";
import { projects } from "../src/content/projects";
import { experience } from "../src/content/experience";
import { certifications } from "../src/content/certifications";
import { activities } from "../src/content/activities";

function renderAt(path = "/") {
  return render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>);
}

describe("portfolio journeys", () => {
  it("introduces the engineer and renders all sections in order", async () => {
    const { container } = renderAt();
    expect(await screen.findByRole("heading", { level: 1 })).toHaveTextContent(profile.headline.join(" "));
    expect(screen.getAllByText(profile.name).length).toBeGreaterThan(0);
    expect([...container.querySelectorAll("main section[id]")].map((s) => s.id)).toEqual([
      "about", "projects", "experience", "certifications", "activities", "toolkit",
    ]);
  });
  it("opens and dismisses the mobile menu with Escape", async () => {
    renderAt();
    const user = userEvent.setup();
    const toggle = await screen.findByRole("button", { name: "Open navigation" });
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
  it("closes navigation after selecting a section", async () => {
    renderAt();
    const user = userEvent.setup();
    await user.click(await screen.findByRole("button", { name: "Open navigation" }));
    await user.click(within(screen.getByRole("navigation", { name: "Main navigation" })).getByRole("link", { name: "Projects" }));
    expect(screen.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  });
  it("does not steal focus on Escape when navigation is closed", async () => {
    renderAt();
    const user = userEvent.setup();
    const heading = await screen.findByRole("heading", { level: 1 });
    heading.focus();
    await user.keyboard("{Escape}");
    expect(heading).toHaveFocus();
  });
  it("renders current profile content and certificate fallbacks without missing actions", async () => {
    renderAt();
    await screen.findByRole("heading", { level: 1 });
    expect(screen.getByText(new RegExp(`GPA ${profile.education.gpa}`))).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /resume/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /live demo/i })).not.toBeInTheDocument();
    expect(screen.queryByText("Certificate preview unavailable")).not.toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "View certificate" })).toHaveLength(certifications.length);
    for (const activity of activities)
      expect(screen.getByRole("heading", { name: activity.title })).toBeInTheDocument();
    expect(within(screen.getByRole("region", { name: "Work Experience" })).getByRole("heading", { name: experience[0].company })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Agent Engineering" })).toBeInTheDocument();
  });
  it("links each homepage project to its canonical route", async () => {
    renderAt();
    await screen.findByRole("heading", { name: "Selected Work" });
    for (const project of projects)
      expect(screen.getByRole("link", { name: `Explore ${project.name}` })).toHaveAttribute("href", `/projects/${project.slug}`);
  });
  it.each(projects)("renders the $name study and its evidence section", async (project) => {
    renderAt(`/projects/${project.slug}`);
    expect(await screen.findByRole("heading", { level: 1, name: project.name })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "My Contribution" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Results & Evidence" })).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Live demo" })).not.toBeInTheDocument();
  });
  it.each(["/missing", "/projects/unknown"])("offers recovery on unknown route %s", async (path) => {
    renderAt(path);
    expect(await screen.findByRole("heading", { name: "A path yet to be built." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to home" })).toHaveAttribute("href", "/");
  });
});
