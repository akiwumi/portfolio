import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/mzdjzgkg";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__left reveal">
            <span className="section-label">04 &mdash; Contact</span>
            <h2 className="contact__title">
              Let&rsquo;s Create
              <br />
              <em>Something Great</em>
            </h2>
            <p className="contact__sub">Whether you have a project in mind, need a creative collaborator, or simply want to connect &mdash; I&rsquo;d love to hear from you.</p>
            <div className="contact__details">
              <a href="mailto:axial_laze_2v@icloud.com" className="contact__link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
                Mail Me Here
              </a>
            </div>
            <div className="social-row">
              <a href="https://github.com/akiwumi" className="soc" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GH</a>
              <a href="https://www.linkedin.com/in/eugeneakiwumi" className="soc" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">in</a>
              <a href="https://www.instagram.com/eugeneakiwumi/" className="soc" aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>
              <a href="https://www.threads.com/@eugeneakiwumi" className="soc" aria-label="Threads" target="_blank" rel="noopener noreferrer">Th</a>
              <a href="https://vimeo.com/ophini" className="soc" aria-label="Vimeo" target="_blank" rel="noopener noreferrer">Vi</a>
            </div>
          </div>

          <div className="reveal">
            <form className="cform" action={FORM_ENDPOINT} method="POST" noValidate onSubmit={handleSubmit}>
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
                <select id="service" name="service" defaultValue="">
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
                <textarea id="message" name="message" placeholder="Tell me about your project..." required />
              </div>
              <button type="submit" className="btn btn-red btn-full" disabled={isSubmitting}>
                <span className="btn-label">{isSubmitting ? "Sending..." : "Send Message"}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
              {status === "success" && <p className="form-status form-status--success" role="status">Message sent. Thank you.</p>}
              {status === "error" && <p className="form-status form-status--error" role="alert">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
