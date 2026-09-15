import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const location                  = useLocation()

  const activePage = location.pathname === '/' ? 'home' : location.pathname.replace('/', '')

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [location])

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeMenu() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const openMenu = () => {
    setMenuOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleMenu = () => menuOpen ? closeMenu() : openMenu()

  // Smooth scroll for same-page hash links
  const handleHashLink = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault()
      closeMenu()
      const el = document.querySelector(hash)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    } else {
      closeMenu()
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            <img src={logoImg} alt="Synergy Hub Africa logo" className="nav-brand-img" />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Synergy Hub Africa</span>
              <span className="nav-brand-tagline">Design · Build · Consultancy</span>
            </div>
          </Link>

          <ul className={`nav-links${menuOpen ? ' open' : ''}`} role="list">
            <li><Link to="/" className={activePage === 'home' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
            <li><a href="/#about"     onClick={e => handleHashLink(e, '#about')}>About</a></li>
            <li><a href="/#services"  onClick={e => handleHashLink(e, '#services')}>Services</a></li>
            <li><a href="/#portfolio" onClick={e => handleHashLink(e, '#portfolio')}>Portfolio</a></li>
            <li><a href="/#contact"   onClick={e => handleHashLink(e, '#contact')}>Contact</a></li>
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

          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Backdrop — dims page content behind open drawer */}
      <div
        className={`nav-overlay${menuOpen ? ' active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}
