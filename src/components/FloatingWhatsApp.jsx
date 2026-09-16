import { useState, useRef, useEffect } from 'react'

const MSG = "Hello%20Synergy%20Hub%20Africa!%20I'd%20like%20to%20inquire%20about%20your%20services."

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    const onDocClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const options = [
    {
      icon: 'call',
      label: '+254 794 980 508',
      hint: 'Phone / WhatsApp',
      href: `https://wa.me/254794980508?text=${MSG}`,
    },
    {
      icon: 'chat',
      label: '+254 737 654264',
      hint: 'WhatsApp',
      href: `https://wa.me/254737654264?text=${MSG}`,
    },
  ]

  return (
    <div className="floating-whatsapp" ref={wrapRef}>
      {open && (
        <div className="floating-whatsapp-menu" role="menu" aria-label="Contact options">
          {options.map((o) => (
            <a
              key={o.label}
              href={o.href}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-wa-option"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className="material-symbols-outlined">{o.icon}</span>
              <span className="floating-wa-option-text">
                {o.label}
                <small>{o.hint}</small>
              </span>
            </a>
          ))}
        </div>
      )}
      <button
        className={`floating-whatsapp-btn whatsapp-1${open ? ' open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close contact options' : 'Contact us'}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="material-symbols-outlined">{open ? 'close' : 'chat'}</span>
        <span className="floating-whatsapp-tooltip">Chat with us</span>
      </button>
    </div>
  )
}