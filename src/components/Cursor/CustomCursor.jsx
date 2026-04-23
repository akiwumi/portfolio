import { useEffect, useRef, useState } from "react";
import useReducedMotion from "../../hooks/useReducedMotion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const frameRef = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || window.matchMedia("(max-width: 900px)").matches) {
      return undefined;
    }

    const updatePointer = (event) => {
      pointer.current = { x: event.clientX, y: event.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.clientX}px`;
        cursorRef.current.style.top = `${event.clientY}px`;
      }
    };

    const animateRing = () => {
      ring.current.x += (pointer.current.x - ring.current.x) * 0.13;
      ring.current.y += (pointer.current.y - ring.current.y) * 0.13;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      frameRef.current = requestAnimationFrame(animateRing);
    };

    const interactiveSelector = "a, button, .pcard, .discipline, .tag, .soc, .f-btn, .skill-block";
    const handlePointerOver = (event) => {
      setHovered(Boolean(event.target.closest(interactiveSelector)));
    };
    const handlePointerOut = (event) => {
      const interactiveElement = event.target.closest(interactiveSelector);
      if (!interactiveElement || !interactiveElement.contains(event.relatedTarget)) {
        setHovered(false);
      }
    };

    const hideCursor = () => setVisible(false);
    const showCursor = () => setVisible(true);

    document.addEventListener("mousemove", updatePointer);
    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    frameRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener("mousemove", updatePointer);
      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      cancelAnimationFrame(frameRef.current);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor" style={{ opacity: visible ? 1 : 0 }} />
      <div
        ref={ringRef}
        className={`cursor-ring${hovered ? " hovered" : ""}`}
        style={{ opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
