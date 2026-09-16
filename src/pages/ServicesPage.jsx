import { useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'

const MS = ({ children, fill = 0, wght = 400 }) => (
  <span
    className="material-symbols-outlined"
    style={{ fontVariationSettings: `'FILL' ${fill}, 'wght' ${wght}, 'GRAD' 0, 'opsz' 24` }}
  >
    {children}
  </span>
)

const services = [
  { icon: 'architecture',   num: '01', title: 'Architectural Design',   desc: 'Innovative, sustainable designs that blend functionality with aesthetic appeal — detailed drawings, planning approvals, and 3D master plans.' },
  { icon: 'construction',   num: '02', title: 'Build & Construction',    desc: 'Full-scale construction management and execution with meticulous attention to detail. Quality workmanship and timely delivery, every time.' },
  { icon: 'forum',          num: '03', title: 'Project Consultancy',     desc: 'Expert advisory services guiding you through every phase — strategic insights, feasibility studies, and practical solutions for complex challenges.' },
  { icon: 'interior_design',num: '04', title: 'Interior Design',         desc: 'Creating spaces that reflect your identity and maximise functionality — bespoke solutions for residential, commercial, and hospitality projects.' },
  { icon: 'park',           num: '05', title: 'Urban Landscaping',       desc: 'Sustainable landscapes that connect people with nature. Indigenous flora, water features, and irrigation systems for any scale of development.' },
  { icon: 'view_in_ar',     num: '06', title: '3D Visualisation',        desc: 'Photorealistic renderings and immersive virtual walkthroughs so you can see and feel your project before a single stone is laid.' },
]

const process = [
  { icon: 'chat_bubble',    num: '01', title: 'Consultation',  desc: 'We meet with you to understand your vision, requirements, budget, and desired timeline.' },
  { icon: 'draw',           num: '02', title: 'Design',        desc: 'Our team creates innovative designs tailored to your brief that meet your needs and exceed expectations.' },
  { icon: 'event_note',     num: '03', title: 'Planning',      desc: 'Detailed project planning, procurement schedules, and resource allocation for smooth, on-budget execution.' },
  { icon: 'hard_hat',       num: '04', title: 'Execution',     desc: 'Expert construction management with regular progress updates, site inspections, and rigorous quality assurance.' },
]

export default function ServicesPage() {
  useReveal()
  useEffect(() => { document.title = 'Services | Synergy Hub Africa' }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero hero--inner" id="services-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <MS fill={1} wght={500}>category</MS>
              What We Offer
            </div>
            <h1 className="hero-title">
              Our<br />
              <span className="highlight">Services</span>
            </h1>
            <p className="hero-description">
              Comprehensive architectural solutions — tailored to your unique vision and requirements,
              delivered with precision from concept to completion.
            </p>
            <div className="hero-actions">
              <a
                href="/#contact"
                className="btn btn-white"
                onClick={e => {
                  e.preventDefault()
                  window.location.href = '/#contact'
                }}
              >
                Get a Quote <MS>arrow_forward</MS>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow"><MS fill={1} wght={500}>apps</MS> Full Portfolio</div>
            <h2 className="section-title">Everything We Do</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Excellence in every service, from the first sketch through to the final handover.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className={`service-card reveal reveal-delay-${(i % 3) + 1}`} key={s.num}>
                <div className="service-icon-wrap">
                  <MS fill={0} wght={300}>{s.icon}</MS>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="service-num">{s.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="why-us section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <MS fill={1} wght={500}>route</MS> How We Work
            </div>
            <h2 className="section-title section-title--light">Our Process</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle" style={{ color: 'var(--text-mid)' }}>
              A structured, transparent approach to delivering exceptional results — every time.
            </p>
          </div>
          <div className="why-us-grid">
            {process.map((p, i) => (
              <div className={`why-us-card reveal reveal-delay-${i}`} key={p.num}>
                <div className="why-us-icon"><MS fill={1} wght={400}>{p.icon}</MS></div>
                <h4>{p.num}. {p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
