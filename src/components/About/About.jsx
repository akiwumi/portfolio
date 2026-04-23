export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about__top-rule" />
      <div className="container">
        <div className="about__header reveal">
          <span className="section-label">01 &mdash; About</span>
          <h2 className="section-title">
            Three Crafts,
            <br />
            <em>One Vision</em>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__portrait reveal">
            <img src="/Eugene-Akiwumi-portrait.png" alt="Eugene Akiwumi" loading="lazy" decoding="async" />
          </div>
          <blockquote className="pull-quote reveal">
            &ldquo;I build things that don&rsquo;t just work perfectly &mdash; they <em>feel</em> right.&rdquo;
          </blockquote>
          <div className="about__body reveal">
            <p>I&rsquo;m a multidisciplinary creative who brings stories to life &mdash; through code, camera, and cinema. My background across frontend development, filmmaking, and photography gives me a rare perspective that most developers simply don&rsquo;t have.</p>
            <p>Every interface I build carries the same intention as every frame I shoot &mdash; purposeful, considered, and made to connect with the person on the other side.</p>
          </div>
        </div>

        <div className="about__cards disciplines">
          <div className="discipline reveal">
            <span className="discipline__num">01</span>
            <div className="discipline__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3>Frontend Developer</h3>
            <p>Building fast, beautiful, accessible web experiences with modern tools and meticulous attention to detail.</p>
          </div>
          <div className="discipline reveal">
            <span className="discipline__num">02</span>
            <div className="discipline__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <polygon points="23 7 16 12 23 17 23 7" />
                <rect x="1" y="5" width="15" height="14" rx="2" />
              </svg>
            </div>
            <h3>Filmmaker</h3>
            <p>Directing and producing visual narratives that engage audiences and tell stories that matter &mdash; concept to final cut.</p>
          </div>
          <div className="discipline reveal">
            <span className="discipline__num">03</span>
            <div className="discipline__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M6.168 18.849a4 4 0 0 1 11.664 0" />
              </svg>
            </div>
            <h3>Photographer</h3>
            <p>Capturing authentic moments and crafting visual stories &mdash; from intimate portraits to documentary work.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
