import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/content/projects";
import { posts } from "@/content/posts";

const staticPaths = ["/", "/projects", "/experience", "/about", "/blog", "/contact"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = [
          ...staticPaths.map((p) => ({ loc: p, priority: p === "/" ? "1.0" : "0.8" })),
          ...projects.map((p) => ({ loc: `/projects/${p.slug}`, priority: "0.7" })),
          ...posts.map((p) => ({ loc: `/blog/${p.slug}`, priority: "0.6" })),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${origin}${u.loc}</loc><changefreq>monthly</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
