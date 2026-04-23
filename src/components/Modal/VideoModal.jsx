import { useEffect, useRef } from "react";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";

export default function VideoModal({ video, onClose }) {
  const closeButtonRef = useRef(null);
  const isOpen = Boolean(video);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const videoUrl = `https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&color=b40020&title=0&byline=0&portrait=0`;

  return (
    <div className="vmodal open" role="dialog" aria-modal="true" aria-label={`${video.title} film player`}>
      <button className="vmodal__backdrop" type="button" aria-label="Close film player" onClick={onClose} />
      <div className="vmodal__wrap">
        <button ref={closeButtonRef} className="vmodal__close" type="button" aria-label="Close" onClick={onClose}>
          &times;
        </button>
        <div className="vmodal__frame">
          <iframe title={`${video.title} film player`} src={videoUrl} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
        </div>
      </div>
    </div>
  );
}
