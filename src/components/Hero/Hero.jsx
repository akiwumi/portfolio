import useLazyHeroVideo from "../../hooks/useLazyHeroVideo";

export default function Hero() {
  const { videoRef, videoSrc } = useLazyHeroVideo("/hero_montage.mp4");

  return (
    <>
      <div className="portrait-bg">
        <video ref={videoRef} className="portrait-bg__video" autoPlay muted loop playsInline preload="none">
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
        <div className="portrait-bg__gradient" />
      </div>

      <section id="hero" className="hero">
        <div className="hero__topbar fi">
          <span className="hero__issue">Portfolio &middot; 2026</span>
          <span className="hero__avail">
            <span className="hero__pulse" />
            Available for Hire
          </span>
        </div>

        <div className="hero__spacer" />

        <div className="hero__foot fi">
          <div className="hero__roles-vert">
            <span>Frontend</span>
            <span className="hero__roles-rule" />
            <span>Developer</span>
            <span className="hero__roles-rule" />
            <span>Filmmaker</span>
            <span className="hero__roles-rule" />
            <span>Photographer</span>
          </div>
          <div className="hero__name-block">
            <h1 className="hero__name">
              <em>EUGENE</em>
              <br />
              Akiwumi
            </h1>
          </div>
          <div className="hero__foot-right">
            <a href="#about" className="hero__discover">
              <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="8" y1="0" x2="8" y2="16" />
                <polyline points="3,12 8,18 13,12" />
              </svg>
              Scroll
            </a>
          </div>
        </div>

        <div className="hero__cta-strip fi">
          <a href="#projects" className="hero__cta-link">View My Work &nbsp;&rarr;</a>
          <div className="hero__cta-divider" />
          <a href="#contact" className="hero__cta-link">Get In Touch &nbsp;&rarr;</a>
          <span className="hero__cta-tagline">Code &middot; Cinema &middot; Lens</span>
        </div>
      </section>
    </>
  );
}
