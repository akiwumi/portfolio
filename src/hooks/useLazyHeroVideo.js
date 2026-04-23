import { useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

export default function useLazyHeroVideo(src) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const load = () => setShouldLoad(true);
    const events = ["pointerdown", "pointermove", "scroll", "keydown"];

    events.forEach((eventName) => {
      window.addEventListener(eventName, load, { once: true, passive: true });
    });

    const timeoutId = window.setTimeout(load, 1200);

    return () => {
      window.clearTimeout(timeoutId);
      events.forEach((eventName) => window.removeEventListener(eventName, load));
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;

    video.load();
    video.play().catch(() => {});
  }, [shouldLoad]);

  return { videoRef, videoSrc: shouldLoad ? src : null };
}
