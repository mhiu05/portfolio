export interface StaticMetadata {
  title: string;
  description: string;
  image: string;
  canonical: string | null;
}

export function renderStaticMetadata(
  source: string,
  metadata: StaticMetadata,
): string {
  const escape = (value: string) =>
    value.replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char]!,
    );
  let html = source.replace(
    /<title>.*?<\/title>/s,
    () => `<title>${escape(metadata.title)}</title>`,
  );
  for (const [key, value] of [
    ["description", metadata.description],
    ["og:title", metadata.title],
    ["og:description", metadata.description],
    ["og:image", metadata.image],
  ]) {
    const tag = new RegExp(
      `<meta\\b(?=[^>]*(?:name|property)="${key}")[^>]*>`,
      "i",
    );
    html = html.replace(tag, (match) =>
      match.replace(/content="[^"]*"/, () => `content="${escape(value)}"`),
    );
  }
  if (metadata.canonical)
    html = html.replace(
      "</head>",
      () =>
        `<link rel="canonical" href="${escape(metadata.canonical!)}" /></head>`,
    );
  return html;
}
