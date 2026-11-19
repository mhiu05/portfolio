import { useEffect, type RefObject } from "react";
import { gsap } from "../../lib/motion";

export function usePageMotion(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const media = gsap.matchMedia();
    const ctx = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-intro]", {
          y: 28,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          clearProps: "all",
        });
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          // Content stays readable before an animation has initialized.
          gsap.from(element, {
            y: 26,
            duration: 0.9,
            ease: "expo.out",
            clearProps: "transform",
            scrollTrigger: { trigger: element, start: "top 93%", once: true },
          });
        });
        const line = scope.current?.querySelector(".timeline-progress");
        if (line)
          gsap.fromTo(
            line,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".timeline",
                start: "top 80%",
                end: "bottom 60%",
                scrub: 0.4,
              },
            },
          );
      });
    }, scope);
    return () => {
      media.revert();
      ctx.revert();
    };
  }, [scope]);
}
