import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">D</span>
          <span>Dev <strong>Stack</strong></span>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="sign-in" href="#contact">Sign In</a>
          <a className="button button-gradient button-small" href="#technologies">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}