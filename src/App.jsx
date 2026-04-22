import { useEffect } from 'react';
import './styles.css';

function App() {
  useEffect(() => {
    let cleanup;

    import('./legacyInteractions.js').then((module) => {
      cleanup = module.initPortfolioInteractions?.();
    });

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <>

      {/* Custom Cursor */}
  <div id="cursor" className="cursor"></div>
  <div id="cursorRing" className="cursor-ring"></div>
      {/* Fixed Video Background */}
  <div className="portrait-bg">
    <video className="portrait-bg__video" autoPlay muted loop playsInline preload="none" data-src="/hero_montage.mp4">
    </video>
    <div className="portrait-bg__gradient"></div>
  </div>
      {/* Navigation */}
  <nav id="nav" className="nav">
    <a href="#" className="nav__logo">EA</a>
    <ul className="nav__links">
      <li><a href="#about"    className="nav__link">About</a></li>
      <li><a href="#skills"   className="nav__link">Skills</a></li>
      <li><a href="#projects" className="nav__link">Projects</a></li>
      <li><a href="#contact"  className="nav__link nav__cta">Get In Touch</a></li>
    </ul>
    <button id="burger" className="nav__burger" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
      {/* Mobile Menu */}
  <div id="mobileMenu" className="mobile-menu">
    <ul>
      <li><a href="#about"    className="mob-link">About</a></li>
      <li><a href="#skills"   className="mob-link">Skills</a></li>
      <li><a href="#projects" className="mob-link">Projects</a></li>
      <li><a href="#contact"  className="mob-link">Contact</a></li>
    </ul>
  </div>
      {/* HERO */}
  <section className="hero">
    <div className="hero__topbar fi">
      <span className="hero__issue">Portfolio &middot; 2026</span>
      <span className="hero__avail">
        <span className="hero__pulse"></span>
        Available for Hire
      </span>
    </div>

    <div className="hero__spacer"></div>

    <div className="hero__foot fi">
      <div className="hero__roles-vert">
        <span>Frontend</span>
        <span className="hero__roles-rule"></span>
        <span>Developer</span>
        <span className="hero__roles-rule"></span>
        <span>Filmmaker</span>
        <span className="hero__roles-rule"></span>
        <span>Photographer</span>
      </div>
      <div className="hero__name-block">
        <h1 className="hero__name"><em>EUGENE</em><br />Akiwumi</h1>
      </div>
      <div className="hero__foot-right">
        <a href="#about" className="hero__discover">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="8" y1="0" x2="8" y2="16"/>
            <polyline points="3,12 8,18 13,12"/>
          </svg>
          Scroll
        </a>
      </div>
    </div>

    <div className="hero__cta-strip fi">
      <a href="#projects" className="hero__cta-link">View My Work &nbsp;&rarr;</a>
      <div className="hero__cta-divider"></div>
      <a href="#contact"  className="hero__cta-link">Get In Touch &nbsp;&rarr;</a>
      <span className="hero__cta-tagline">Code &middot; Cinema &middot; Lens</span>
    </div>
  </section>
      {/* ABOUT */}
  <section id="about" className="about section">
    <div className="about__top-rule"></div>
    <div className="container">

      <div className="about__header reveal">
        <span className="section-label">01 &mdash; About</span>
        <h2 className="section-title">Three Crafts,<br /><em>One Vision</em></h2>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
          </div>
          <h3>Frontend Developer</h3>
          <p>Building fast, beautiful, accessible web experiences with modern tools and meticulous attention to detail.</p>
        </div>
        <div className="discipline reveal">
          <span className="discipline__num">02</span>
          <div className="discipline__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="23 7 16 12 23 17 23 7"/>
              <rect x="1" y="5" width="15" height="14" rx="2"/>
            </svg>
          </div>
          <h3>Filmmaker</h3>
          <p>Directing and producing visual narratives that engage audiences and tell stories that matter &mdash; concept to final cut.</p>
        </div>
        <div className="discipline reveal">
          <span className="discipline__num">03</span>
          <div className="discipline__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="10" r="3"/>
              <path d="M6.168 18.849a4 4 0 0 1 11.664 0"/>
            </svg>
          </div>
          <h3>Photographer</h3>
          <p>Capturing authentic moments and crafting visual stories &mdash; from intimate portraits to documentary work.</p>
        </div>
      </div>

    </div>
  </section>
      {/* SKILLS */}
  <section id="skills" className="skills section">
    <div className="container">

      <div className="skills__header reveal">
        <span className="section-label">02 &mdash; Skills</span>
        <h2 className="section-title">Tools of<br /><em>the Trade</em></h2>
      </div>

      <div className="skills__grid">
        <div className="skill-block reveal">
          <div className="skill-block__title">
            <span className="skill-block__num">&mdash;</span>
            Frontend Development
          </div>
          <div className="tags">
            <span className="tag">HTML5</span>
            <span className="tag">CSS3</span>
            <span className="tag">JavaScript</span>
            <span className="tag">TypeScript</span>
            <span className="tag">React</span>
            <span className="tag">Next.js</span>
            <span className="tag">Tailwind CSS</span>
            <span className="tag">GSAP</span>
            <span className="tag">Node.js</span>
            <span className="tag">REST APIs</span>
            <span className="tag">Git / GitHub</span>
            <span className="tag">Figma</span>
            <span className="tag">Responsive Design</span>
          </div>
        </div>
        <div className="skill-block reveal">
          <div className="skill-block__title">
            <span className="skill-block__num">&mdash;</span>
            Filmmaking
          </div>
          <div className="tags">
            <span className="tag">Directing</span>
            <span className="tag">Cinematography</span>
            <span className="tag">Pre-Production</span>
            <span className="tag">Scriptwriting</span>
            <span className="tag">Video Editing</span>
            <span className="tag">Color Grading</span>
            <span className="tag">DaVinci Resolve</span>
            <span className="tag">Final Cut Pro</span>
            <span className="tag">Storytelling</span>
          </div>
        </div>
        <div className="skill-block reveal">
          <div className="skill-block__title">
            <span className="skill-block__num">&mdash;</span>
            Photography
          </div>
          <div className="tags">
            <span className="tag">Portraiture</span>
            <span className="tag">Documentary</span>
            <span className="tag">Street Photography</span>
            <span className="tag">Landscape</span>
            <span className="tag">Studio Lighting</span>
            <span className="tag">Post-Processing</span>
            <span className="tag">Adobe Lightroom</span>
            <span className="tag">Photoshop</span>
          </div>
        </div>
      </div>

    </div>
  </section>
      {/* PROJECTS */}
  <section id="projects" className="projects section">
    <div className="container">

      <div className="projects__header reveal">
        <span className="section-label">03 &mdash; Projects</span>
        <h2 className="section-title">Selected<br /><em>Work</em></h2>
        <div className="filter-bar">
          <button className="f-btn f-btn--on reveal" data-filter="all">All</button>
          <button className="f-btn reveal" data-filter="dev">Development</button>
          <button className="f-btn reveal" data-filter="film">Film</button>
          <button className="f-btn reveal" data-filter="photo">Photography</button>
        </div>
      </div>

      <div className="carousel">
        <button className="carousel__arrow carousel__arrow--left" aria-label="Previous project">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12,19 5,12 12,5"/>
          </svg>
        </button>
        <button className="carousel__arrow carousel__arrow--right" aria-label="Next project">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12,5 19,12 12,19"/>
          </svg>
        </button>

        <div className="projects__grid">

          <article className="pcard reveal" data-cat="dev">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/walantu.png" data-position="center top"></div>
              <div className="pcard__overlay">
                <a href="https://walantu.vercel.app/index.html" className="pcard__view" target="_blank" rel="noopener noreferrer">View Project &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Website</span>
                <span className="pcard__yr">2026</span>
              </div>
              <h3 className="pcard__title">Walantu</h3>
              <p className="pcard__desc">A website in progress for a handyman company in Ghana. The project includes both a frontend and a CRM backend.</p>
              <div className="pcard__tags">
                <span>Next.js</span><span>React</span><span>CRM</span><span>Full Stack</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="dev">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/at_thumb.png" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="https://audiotypebe.onrender.com" className="pcard__view" target="_blank" rel="noopener noreferrer">View Project &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Web App</span>
                <span className="pcard__yr">2025</span>
              </div>
              <h3 className="pcard__title">Audio to Text Transcription</h3>
              <p className="pcard__desc">A website to transcribe audio files to text, using Groq AI for the transcription.</p>
              <div className="pcard__tags">
                <span>React</span><span>Groq AI</span><span>FastAPI</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="film">
            <div className="pcard__thumb">
              <div className="pcard__bg pcard__bg--2" data-bg="/imgs/the_test_thumb.jpg" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="#" className="pcard__view js-vimeo-open" data-vimeo="991526777">Watch Film &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Short Film</span>
                <span className="pcard__yr">2024</span>
              </div>
              <h3 className="pcard__title">The Test</h3>
              <p className="pcard__desc">A short experimental film, about the price of failure in a world of crime.</p>
              <div className="pcard__tags">
                <span>Drama</span><span>4K</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="photo">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/photo_thumb.jpg" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="https://www.akiwumiphoto.com" className="pcard__view" target="_blank" rel="noopener noreferrer">View Gallery &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Photo Series</span>
                <span className="pcard__yr">2025</span>
              </div>
              <h3 className="pcard__title">Eugene Akiwumi Photography</h3>
              <p className="pcard__desc">This is my extensive photography portfolio. I have a couple of exhibitions later in Stockholm in April and at the end of the summer. Enjoy the images, there are more to come.</p>
              <div className="pcard__tags">
                <span>Portraiture</span><span>Documentary</span><span>Exhibitions</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="dev">
            <div className="pcard__thumb">
              <div className="pcard__bg pcard__bg--4" data-bg="/imgs/movies_thumb.png" data-position="center top"></div>
              <div className="pcard__overlay">
                <a href="https://movies-db-project.vercel.app" className="pcard__view" target="_blank" rel="noopener noreferrer">View Project &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Web App</span>
                <span className="pcard__yr">2025</span>
              </div>
              <h3 className="pcard__title">Movie Database</h3>
              <p className="pcard__desc">A school project to create a movie database.</p>
              <div className="pcard__tags">
                <span>React</span><span>Tailwind</span><span>Next.js</span><span>JavaScript</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="film">
            <div className="pcard__thumb">
              <div className="pcard__bg pcard__bg--2" data-bg="/imgs/unhcr_thumb.jpg" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="#" className="pcard__view js-vimeo-open" data-vimeo="8850062">Watch Film &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Music Video</span>
                <span className="pcard__yr">1993</span>
              </div>
              <h3 className="pcard__title">Hate and Destruction</h3>
              <p className="pcard__desc">A music video for the United Nations High Commissioner for Refugees, as part of a campaing highlighting the plight of refugees.</p>
              <div className="pcard__tags">
                <span>Music Video</span><span>Super 35mm film</span><span>awareness campaign</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="dev">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/ca_thumb.png" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="https://connectafrica-woad.vercel.app" className="pcard__view" target="_blank" rel="noopener noreferrer">View Project &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Web App</span>
                <span className="pcard__yr">2025</span>
              </div>
              <h3 className="pcard__title">Connect Africa</h3>
              <p className="pcard__desc">A web portal for connecting international investors with investment opportunities in Africa, in a safe environment, whilst helping entrepreneurs introduce their projects for investment.</p>
              <div className="pcard__tags">
                <span>Next.js</span><span>React</span><span>Supabase</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="dev">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/weather_thumb.png" data-position="center top"></div>
              <div className="pcard__overlay">
                <a href="https://weather-phi-ten-23.vercel.app" className="pcard__view" target="_blank" rel="noopener noreferrer">View Project &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Mobile Web App</span>
                <span className="pcard__yr">2025</span>
              </div>
              <h3 className="pcard__title">Mobile Weather App</h3>
              <p className="pcard__desc">A small project to create a weather app to practice different skills.</p>
              <div className="pcard__tags">
                <span>JavaScript</span><span>CSS</span><span>Weather API</span><span>Responsive</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="dev">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/umoja_thumb.png" data-position="center top"></div>
              <div className="pcard__overlay">
                <a href="https://umoja-ten.vercel.app" className="pcard__view" target="_blank" rel="noopener noreferrer">View Project &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Website</span>
                <span className="pcard__yr">2026</span>
              </div>
              <h3 className="pcard__title">Umoja</h3>
              <p className="pcard__desc">A website for Umoja-ai, an AI education initiative project in Ghana.</p>
              <div className="pcard__tags">
                <span>Next.js</span><span>React</span><span>AI</span><span>Education</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="dev">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/ophini_thumb.png" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="https://ophinient.vercel.app" className="pcard__view" target="_blank" rel="noopener noreferrer">View Project &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Website</span>
                <span className="pcard__yr">2026</span>
              </div>
              <h3 className="pcard__title">Ophini Entertainment</h3>
              <p className="pcard__desc">A website for an indie movie production company.</p>
              <div className="pcard__tags">
                <span>Next.js</span><span>React</span><span>Film</span><span>Production</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="film">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/1046_thumb.jpg" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="#" className="pcard__view js-vimeo-open" data-vimeo="717076887">Watch Film &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Commercial</span>
                <span className="pcard__yr">2022</span>
              </div>
              <h3 className="pcard__title">1046.se</h3>
              <p className="pcard__desc">An integration commercial for the 1046 Group in Sweden, focusing on social integration.</p>
              <div className="pcard__tags">
                <span>Commercial</span><span>4K</span><span>Sweden</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="film">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/schiff_thumb.png" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="#" className="pcard__view js-vimeo-open" data-vimeo="312270602">Watch Film &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Documentary</span>
                <span className="pcard__yr">2024</span>
              </div>
              <h3 className="pcard__title">Schiff On Ice</h3>
              <p className="pcard__desc">A spontaneous short documentary about actor and writer Schiaffino Musarra, a native of Georgia (USA) who is one of three volunteers who make the ice in our neighbourhood every year for all to skate &mdash; a hockey fanatic, a long way from the US to Stockholm, Sweden.</p>
              <div className="pcard__tags">
                <span>Documentary</span><span>Sony a6500</span><span>7Artisans 25mm f1.8</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="film">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/van_thumb.png" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="#" className="pcard__view js-vimeo-open" data-vimeo="995157270">Watch Film &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Short Film</span>
                <span className="pcard__yr">2025</span>
              </div>
              <h3 className="pcard__title">V&auml;nn&auml;s Concerto</h3>
              <p className="pcard__desc">A short experiment I shot up in V&auml;nn&auml;s in the north of Sweden.</p>
              <div className="pcard__tags">
                <span>Experimental</span><span>Sony FX30</span><span>Meka 12mm 2.8</span>
              </div>
            </div>
          </article>

          <article className="pcard reveal" data-cat="film">
            <div className="pcard__thumb">
              <div className="pcard__bg" data-bg="/imgs/master_thumb.png" data-position="center"></div>
              <div className="pcard__overlay">
                <a href="#" className="pcard__view js-vimeo-open" data-vimeo="325045080">Watch Film &#8599;</a>
              </div>
            </div>
            <div className="pcard__body">
              <div className="pcard__meta">
                <span className="pcard__cat">Short Film</span>
                <span className="pcard__yr">2024</span>
              </div>
              <h3 className="pcard__title">The Master</h3>
              <p className="pcard__desc">A little spontaneous joint about my good friend Shaff, who is an internationally acclaimed barber. Shot in his shop in Stockholm.</p>
              <div className="pcard__tags">
                <span>Documentary</span><span>Sony a6500</span><span>7Artisans 25mm f1.8</span>
              </div>
            </div>
          </article>

        </div>
        <div className="carousel__counter">
          <span className="carousel__current">01</span>
          <span className="carousel__divider">/</span>
          <span className="carousel__total">14</span>
        </div>
      </div>
    </div>
  </section>
      {/* CONTACT */}
  <section id="contact" className="contact section">
    <div className="container">
      <div className="contact__grid">

        <div className="contact__left reveal">
          <span className="section-label">04 &mdash; Contact</span>
          <h2 className="contact__title">Let&rsquo;s Create<br /><em>Something Great</em></h2>
          <p className="contact__sub">Whether you have a project in mind, need a creative collaborator, or simply want to connect &mdash; I&rsquo;d love to hear from you.</p>
          <div className="contact__details">
            <a href="mailto:axial_laze_2v@icloud.com" className="contact__link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <polyline points="2,4 12,13 22,4"/>
              </svg>
              Mail Me Here
            </a>
          </div>
          <div className="social-row">
            <a href="https://github.com/akiwumi" className="soc" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/eugeneakiwumi" className="soc" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/eugeneakiwumi/" className="soc" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://www.threads.com/@eugeneakiwumi" className="soc" aria-label="Threads" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12.186 24h-.007C5.965 24 2.292 20.269 2.292 14.063V9.937C2.292 3.731 5.965 0 12.186 0h.007c3.2 0 5.756 1.033 7.583 3.07 1.674 1.866 2.554 4.448 2.616 7.68l-3.276.007c-.044-2.307-.63-4.096-1.743-5.313C16.24 4.226 14.47 3.425 12.193 3.413 7.95 3.413 5.704 5.907 5.704 9.937v4.126c0 4.03 2.246 6.524 6.489 6.524 2.07 0 3.73-.67 4.797-1.937.907-1.077 1.403-2.554 1.475-4.393-.842.418-1.79.667-2.786.724-3.633.209-6.16-1.876-6.318-5.209-.07-1.482.43-2.879 1.407-3.932 1.024-1.105 2.5-1.73 4.15-1.759 1.86-.033 3.382.67 4.396 2.033.888 1.192 1.382 2.82 1.469 4.84.01.212.015.427.015.645 0 5.683-2.946 9.893-8.612 9.893z"/>
              </svg>
            </a>
            <a href="https://vimeo.com/ophini" className="soc" aria-label="Vimeo" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 7.42c-.09 2.09-1.55 4.95-4.36 8.57C14.76 19.7 12.32 21.5 10.3 21.5c-1.31 0-2.42-1.21-3.32-3.64L5.2 12.6C4.52 10.17 3.79 8.95 3 8.95c-.16 0-.74.35-1.72 1.05L0 8.53c1.09-.95 2.16-1.9 3.2-2.85C4.67 4.35 5.77 3.7 6.54 3.63c1.85-.17 2.99.97 3.39 3.4.46 2.7.78 4.38.97 5.05.54 2.44 1.13 3.66 1.78 3.66.5 0 1.26-.79 2.26-2.38 1.01-1.58 1.55-2.79 1.62-3.61.14-1.37-.4-2.06-1.62-2.06-.58 0-1.17.13-1.79.4.98-3.23 2.85-4.8 5.6-4.7 2.05.07 3.02 1.38 2.89 3.63z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="reveal">
          <form id="contactForm" className="cform" action="https://formspree.io/f/mzdjzgkg" method="POST" noValidate>
            <div className="cform__group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" name="name" placeholder="John Smith" required />
            </div>
            <div className="cform__group">
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="cform__group">
              <label htmlFor="service">Project Type</label>
              <select id="service" name="service">
                <option value="" disabled>Select a service...</option>
                <option value="web">Web Development</option>
                <option value="film">Film Production</option>
                <option value="photo">Photography</option>
                <option value="collab">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="cform__group">
              <label htmlFor="message">Tell Me About Your Project</label>
              <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button id="submitBtn" type="submit" className="btn btn-red btn-full">
              <span className="btn-label">Send Message</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
      {/* FOOTER */}
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <p>&copy; 2026 Eugene Akiwumi &mdash; Built with code &amp; creativity.</p>
        <a href="#" className="footer__top">Back to Top &uarr;</a>
      </div>
    </div>
  </footer>
      {/* Video Modal */}
  <div id="vimeoModal" className="vmodal" role="dialog" aria-modal="true" aria-label="Film player">
    <div className="vmodal__backdrop"></div>
    <div className="vmodal__wrap">
      <button className="vmodal__close" aria-label="Close">&times;</button>
      <div className="vmodal__frame">
        <iframe id="vimeoFrame" title="Vimeo film player" src="about:blank" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
    </div>
  </div>
    </>
  );
}

export default App;
