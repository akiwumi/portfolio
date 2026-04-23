import { useEffect } from "react";
import useReducedMotion from "./useReducedMotion";

export default function useRevealOnScroll() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const revealElements = [...document.querySelectorAll(".reveal")];

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("in"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const parent = element.parentElement;
          const isGroupedReveal = parent?.matches(
            ".skills__grid, .projects__grid, .about__cards, .filter-bar",
          );

          if (isGroupedReveal) {
            const siblings = [...parent.children].filter((child) =>
              child.classList.contains("reveal"),
            );
            const index = siblings.indexOf(element);
            window.setTimeout(() => element.classList.add("in"), index * 90);
          } else {
            element.classList.add("in");
          }

          observer.unobserve(element);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [prefersReducedMotion]);
}
