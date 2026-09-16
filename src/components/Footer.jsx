import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'

const WA_MSG = "Hello%20Synergy%20Hub%20Africa!%20I'd%20like%20to%20inquire%20about%20your%20services."

const waOptions = [
  { icon: 'call', label: '+254 794 980 508',  hint: 'Phone / WhatsApp', href: `https://wa.me/254794980508?text=${WA_MSG}` },
  { icon: 'chat', label: '+254 737 654264',   hint: 'WhatsApp',         href: `https://wa.me/254737654264?text=${WA_MSG}` },
]

export default function Footer() {
  const [waOpen, setWaOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setWaOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setWaOpen(false) }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="nav-brand">
              <img src={logoImg} alt="Synergy Hub Africa" className="nav-brand-img" />
              <div className="nav-brand-text">
                <span className="nav-brand-name">Synergy Hub Africa</span>
                <span className="nav-brand-tagline">Design · Build · Consultancy</span>
              </div>
            </Link>
            <p>A premier design, build, and consultancy firm transforming architectural visions into exceptional realities across Africa.</p>
            <div className="footer-social">
              <div className="footer-social-wa-wrap" ref={ref}>
                <button
                  className={`footer-social-btn footer-social-wa${waOpen ? ' open' : ''}`}
                  onClick={() => setWaOpen(o => !o)}
                  aria-label="WhatsApp contact options"
                  aria-expanded={waOpen}
                  aria-haspopup="menu"
                >
                  <span className="material-symbols-outlined">chat</span>
                </button>
                {waOpen && (
                  <div className="footer-social-wa-dropdown" role="menu">
                    {waOptions.map((o) => (
                      <a
                        key={o.label}
                        href={o.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-wa-option"
                        role="menuitem"
                        onClick={() => setWaOpen(false)}
                      >
                        <span className="material-symbols-outlined">{o.icon}</span>
                        <span className="nav-wa-option-text">
                          {o.label}
                          <small>{o.hint}</small>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="mailto:synergyhubafrica01@gmail.com" aria-label="Email">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/"><span className="material-symbols-outlined">chevron_right</span>Home</Link>
              <a href="/#about"><span className="material-symbols-outlined">chevron_right</span>About Us</a>
              <a href="/#services"><span className="material-symbols-outlined">chevron_right</span>Services</a>
              <a href="/#portfolio"><span className="material-symbols-outlined">chevron_right</span>Portfolio</a>
              <a href="/#contact"><span className="material-symbols-outlined">chevron_right</span>Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>
            <div className="footer-links">
              <a href="/#services"><span className="material-symbols-outlined">chevron_right</span>Design</a>
              <a href="/#services"><span className="material-symbols-outlined">chevron_right</span>Build</a>
              <a href="/#services"><span className="material-symbols-outlined">chevron_right</span>Consultancy</a>
              <a href="/#services"><span className="material-symbols-outlined">chevron_right</span>Landscaping</a>
              <a href="/#services"><span className="material-symbols-outlined">chevron_right</span>3D Visualization</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact</h4>
            <div className="footer-links">
              <a href="tel:+254794980508">
                <span className="material-symbols-outlined">call</span>+254 794 980 508
              </a>
              <a href="mailto:synergyhubafrica01@gmail.com">
                <span className="material-symbols-outlined">mail</span>synergyhubafrica01@gmail.com
              </a>
              <a href="https://wa.me/254737654264" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">chat</span>WhatsApp: +254 737 654264
              </a>
              <a href="https://wa.me/254794980508" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">chat</span>WhatsApp: +254 794 980 508
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Synergy Hub Africa. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/">Home</Link>
            <a href="/#about">About</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}