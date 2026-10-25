
import { useState } from 'react'
import './Navbar.css'
import ThemeToggle from "./ThemeToggle"

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a
        className="site-brand"
        href="#home"
        aria-label="EMMANUEL Designs home"
      >
        <img
          src="/images/emmanuel-designs-logo.png"
          alt="EMMANUEL Designs"
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href="#contact">
        Let's talk <span>↗</span>
      {/* <ThemeToggle /> */}
      </a>
    </header>
  )
}
