import { useMemo, useState } from "react";
import { navLinks } from "../../data/navLinks";
import useActiveSection from "../../hooks/useActiveSection";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useScrolledPast from "../../hooks/useScrolledPast";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionIds = useMemo(() => ["about", "skills", "projects", "contact"], []);
  const activeSection = useActiveSection(sectionIds);
  const isScrolled = useScrolledPast(60);

  useLockBodyScroll(menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav id="nav" className={`nav${isScrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav__logo" onClick={closeMenu}>EA</a>
        <ul className="nav__links">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link${link.cta ? " nav__cta" : ""}${activeSection === sectionId ? " active" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          id="burger"
          className={`nav__burger${menuOpen ? " open" : ""}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="mob-link" onClick={closeMenu}>
                {link.mobileLabel || link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
