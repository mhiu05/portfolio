import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { site } from "../content/site";

export function usePage(title: string, description = site.description) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = title;
    for (const [selector, value] of [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
    ])
      document.querySelector(selector)?.setAttribute("content", value);
    if (site.url) {
      let link = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.append(link);
      }
      const root = `${site.url.replace(/\/$/, "")}${import.meta.env.BASE_URL}`;
      link.href =
        import.meta.env.VITE_ROUTER_MODE === "hash"
          ? root
          : `${root.replace(/\/$/, "")}${pathname}`;
    }
    const frame = requestAnimationFrame(() => {
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        /* Treat malformed fragments as literal IDs. */
      }
      const target = hash
        ? document.getElementById(id)
        : document.querySelector<HTMLElement>("main h1");
      if (hash && target) target.scrollIntoView({ block: "start" });
      else window.scrollTo({ top: 0, behavior: "instant" });
      if (target instanceof HTMLElement) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [title, description, pathname, hash]);
}
