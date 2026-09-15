import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const activePage = location.pathname === '/' ? 'home' : location.pathname.replace('/', '')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    const next = !menuOpen
    setMenuOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const handleHashLink = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault()
      closeMenu()
      const el = document.querySelector(hash)
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <div className="container">
        <Link to="/" className="nav-brand">
          <img src={logoImg} alt="Synergy Hub Africa" className="nav-brand-img" />
          <div className="nav-brand-text">
            <span className="nav-brand-name">Synergy Hub Africa</span>
            <span className="nav-brand-tagline">Design · Build · Consultancy</span>
          </div>
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><Link to="/" className={activePage === 'home' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
          <li><a href="/#about" onClick={e => handleHashLink(e, '#about')}>About</a></li>
          <li><a href="/#services" onClick={e => handleHashLink(e, '#services')}>Services</a></li>
          <li><a href="/#portfolio" onClick={e => handleHashLink(e, '#portfolio')}>Portfolio</a></li>
          <li><a href="/#contact" onClick={e => handleHashLink(e, '#contact')}>Contact</a></li>
          <li>
            <a
              href="https://wa.me/254737654264?text=Hello%20Synergy%20Hub%20Africa!%20I'd%20like%20to%20inquire%20about%20your%20services."
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp
            </a>
          </li>
        </ul>

        <div
          className={`hamburger${menuOpen ? ' active' : ''}`}
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && toggleMenu()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
