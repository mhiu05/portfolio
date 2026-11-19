import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
// Read the canonical source through Vite's TS loader, without duplicating metadata.
import { createServer } from "vite";
const server = await createServer({
  configFile: false,
  appType: "custom",
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true },
});
try {
  const { site } = await server.ssrLoadModule("/src/content/site.ts");
  const { projects } = await server.ssrLoadModule(
    "/src/content/projects/index.ts",
  );
  const { profile } = await server.ssrLoadModule("/src/content/profile.ts");
  const { renderStaticMetadata } = await server.ssrLoadModule(
    "/src/lib/staticMetadata.ts",
  );
  const base = process.env.VITE_BASE_PATH || "/";
  const routes =
    process.env.VITE_ROUTER_MODE === "hash"
      ? [""]
      : ["", ...projects.map((project) => `projects/${project.slug}`)];
  const source = await readFile("dist/index.html", "utf8");
  const image = `${site.url ? site.url.replace(/\/$/, "") : ""}${base}images/og-cover.png`;
  const html = renderStaticMetadata(source, {
    title: site.title,
    description: site.description,
    image,
    canonical: site.url ? `${site.url.replace(/\/$/, "")}${base}` : null,
  });
  if (site.url) {
    const origin = site.url.replace(/\/$/, "");
    await writeFile(
      "dist/sitemap.xml",
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${origin}${base}${route}</loc></url>`).join("")}</urlset>`,
    );
    await writeFile(
      "dist/robots.txt",
      `User-agent: *\nAllow: /\nSitemap: ${origin}${base}sitemap.xml\n`,
    );
  } else await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\n");
  await writeFile("dist/index.html", html);
  await writeFile(join("dist", "404.html"), html);
  if (profile.resume && !profile.resume.startsWith("http")) {
    await readFile(join("public", profile.resume.replace(/^\//, "")));
  }
  console.log(
    `Static hosting files generated. ${site.url ? "Sitemap generated." : "Set site.url to generate a sitemap and canonical URL."}`,
  );
} finally {
  await server.close();
}
