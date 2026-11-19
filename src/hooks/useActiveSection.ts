import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../content/navigation";
export function useActiveSection() {
  const [active, setActive] = useState("about");
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [pathname]);
  return pathname === "/" ? active : "";
}
