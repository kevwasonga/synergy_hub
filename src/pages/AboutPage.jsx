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

export default function AboutPage() {
  useReveal()
  useEffect(() => { document.title = 'About Us | Synergy Hub Africa' }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="about-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <MS fill={1} wght={500}>info</MS>
              Our Story
            </div>
            <h1 className="hero-title">
              About<br />
              <span className="highlight">Synergy Hub Africa</span>
            </h1>
            <p className="hero-description">
              Learn about our journey, mission, and the team dedicated to transforming
              architectural visions across Africa since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-frame reveal">
              <div className="about-img-placeholder">
                <span>SHA</span>
              </div>
              <div className="about-image-badge">
                <div className="badge-num">12+</div>
                <div className="badge-label">Years of Excellence</div>
              </div>
            </div>

            <div className="about-content reveal reveal-delay-1">
              <div className="section-eyebrow">
                <MS fill={1} wght={500}>history_edu</MS> Our Story
              </div>
              <h2 className="section-title">Africa's Premier Design &amp; Build Firm</h2>
              <div className="section-divider section-divider--left"></div>
              <p>
                Synergy Hub Africa is a dynamic design, build, and consultancy firm headquartered
                in Kenya. Founded in 2014, we specialize in creating architectural masterpieces
                that blend modern innovation with African heritage.
              </p>
              <p>
                Our multidisciplinary team brings together architects, engineers, designers, and
                project managers who share a singular passion for excellence — delivering spaces
                that inspire, function beautifully, and stand the test of time.
              </p>
              <div className="about-features">
                {[
                  { icon: 'architecture',       label: 'Innovative Designs'  },
                  { icon: 'engineering',         label: 'Expert Execution'    },
                  { icon: 'groups',              label: 'Client-Centric'      },
                  { icon: 'schedule',            label: 'Timely Delivery'     },
                ].map(f => (
                  <div className="about-feature" key={f.label}>
                    <MS fill={1} wght={400}>{f.icon}</MS>
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="why-us section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <MS fill={1} wght={500}>bar_chart</MS> By the Numbers
            </div>
            <h2 className="section-title section-title--light">Why Choose Us</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle" style={{ color: 'var(--text-mid)' }}>
              Over a decade of excellence, delivered consistently across East Africa.
            </p>
          </div>
          <div className="why-us-grid">
            {[
              { icon: 'domain',        num: '150+', title: 'Projects Completed',  desc: 'Architectural realities delivered across Kenya and East Africa.' },
              { icon: 'calendar_today',num: '12+',  title: 'Years Experience',    desc: 'Over a decade of excellence in design and construction.' },
              { icon: 'sentiment_very_satisfied', num: '98%', title: 'Client Satisfaction', desc: 'Consistently delivering beyond expectations and on schedule.' },
              { icon: 'badge',         num: '50+',  title: 'Expert Team Members', desc: 'Dedicated professionals committed to your project\'s success.' },
            ].map((w, i) => (
              <div className={`why-us-card reveal reveal-delay-${i}`} key={w.title}>
                <div className="why-us-icon"><MS fill={1} wght={400}>{w.icon}</MS></div>
                <h4>{w.num} — {w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="services section">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <MS fill={1} wght={500}>hub</MS> Our Values
            </div>
            <h2 className="section-title">The Principles That Guide Us</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Every decision, every project — guided by these core values.
            </p>
          </div>
          <div className="services-grid">
            {[
              { icon: 'gavel',              title: 'Integrity',      desc: 'We operate with transparency and honesty in all client relationships and project deliverables.' },
              { icon: 'workspace_premium',  title: 'Excellence',     desc: 'We pursue perfection in design, construction quality, and client service at every step.' },
              { icon: 'lightbulb',          title: 'Innovation',     desc: 'We embrace modern techniques and sustainable practices to create future-ready spaces.' },
              { icon: 'eco',                title: 'Sustainability',  desc: 'We design and build with environmental responsibility and long-term impact in mind.' },
            ].map((v, i) => (
              <div className={`service-card reveal reveal-delay-${(i % 3) + 1}`} key={v.title}>
                <div className="service-icon-wrap">
                  <MS fill={0} wght={300}>{v.icon}</MS>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
