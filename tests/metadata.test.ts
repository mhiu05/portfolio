import { describe, expect, it } from "vitest";
import { renderStaticMetadata } from "../src/lib/staticMetadata";

describe("production metadata", () => {
  it("updates formatted HTML from canonical content without interpreting dollar signs", () => {
    const html =
      '<head><title>Old</title><meta\n name="description"\n content="Old"\n/><meta property="og:title" content="Old"/><meta property="og:description" content="Old"/><meta property="og:image" content="Old"/></head>';
    const result = renderStaticMetadata(html, {
      title: "Name & Role",
      description: 'A $1 idea with "quotes"',
      image: "https://example.com/og.png",
      canonical: "https://example.com/",
    });
    const doc = new DOMParser().parseFromString(result, "text/html");
    expect(doc.title).toBe("Name & Role");
    expect(
      doc.querySelector('meta[name="description"]')?.getAttribute("content"),
    ).toBe('A $1 idea with "quotes"');
    expect(
      doc.querySelector('meta[property="og:title"]')?.getAttribute("content"),
    ).toBe("Name & Role");
    expect(
      doc.querySelector('meta[property="og:image"]')?.getAttribute("content"),
    ).toBe("https://example.com/og.png");
    expect(
      doc.querySelector('link[rel="canonical"]')?.getAttribute("href"),
    ).toBe("https://example.com/");
  });
  it("does not invent a deployment URL for a local build", () => {
    const result = renderStaticMetadata("<head><title>Old</title></head>", {
      title: "Portfolio",
      description: "",
      image: "/og.png",
      canonical: null,
    });
    expect(result).not.toContain("canonical");
    expect(result).toContain("<title>Portfolio</title>");
  });
});
