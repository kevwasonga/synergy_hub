import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'

export default function Footer() {
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
              <a href="https://wa.me/254737654264" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <span className="material-symbols-outlined">chat</span>
              </a>
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
