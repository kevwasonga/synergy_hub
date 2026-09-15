import { useRef } from 'react'
import { useReveal }   from '../hooks/useReveal'
import { useCounters } from '../hooks/useCounters'

/* Tiny helper so JSX stays readable */
const MS = ({ children, fill = 0, wght = 400, size }) => (
  <span
    className="material-symbols-outlined"
    style={{
      fontVariationSettings: `'FILL' ${fill}, 'wght' ${wght}, 'GRAD' 0, 'opsz' 24`,
      ...(size ? { fontSize: size } : {}),
    }}
  >
    {children}
  </span>
)

export default function HomePage() {
  useReveal()
  useCounters('.hero-stat-number')

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const f   = e.target
    const get = (n) => f.querySelector(`[name="${n}"]`)?.value || ''
    const body = `Name: ${get('name')}\nEmail: ${get('email')}\nPhone: ${get('phone')}\nService: ${get('service')}\n\nMessage:\n${get('message')}`
    window.open(
      `mailto:synergyhubafrica@gmail.com?subject=New%20Inquiry%20from%20${encodeURIComponent(get('name'))}&body=${encodeURIComponent(body)}`,
      '_blank'
    )
    const btn  = f.querySelector('button[type="submit"]')
    const orig = btn.innerHTML
    btn.innerHTML = '<span class="material-symbols-outlined" style="font-variation-settings:\'FILL\' 1,\'wght\' 400,\'GRAD\' 0,\'opsz\' 24">check_circle</span> Sent!'
    btn.style.background = '#25d366'
    btn.style.color      = '#fff'
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; btn.style.color = ''; f.reset() }, 3000)
  }

  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="hero" id="home">
        <div className="container">

          {/* Left — text */}
          <div className="hero-content">
            <div className="hero-badge">
              <MS fill={1} wght={500}>verified</MS>
              Premium Architectural Services
            </div>

            <h1 className="hero-title">
              Building Dreams,<br />
              <span className="highlight">Shaping Futures</span>
            </h1>

            <p className="hero-tagline">Design · Build · Consultancy</p>

            <p className="hero-description">
              Synergy Hub Africa delivers exceptional architectural design, construction, and
              consultancy services across the continent — transforming visions into landmark realities.
            </p>

            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>
                Get a Quote <MS>arrow_forward</MS>
              </button>
              <a
                href="https://wa.me/254737654264?text=Hello%20Synergy%20Hub%20Africa!%20I'd%20like%20to%20inquire%20about%20your%20services."
                target="_blank" rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MS fill={1}>chat</MS> WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right — service cards panel (hidden on mobile via CSS) */}
          <div className="hero-visual">
            <HeroCard />
          </div>

          {/* Stats strip — 2-col mobile, 4-col ≥480px */}
          <div className="hero-stats">
            {[
              { num: '150+', label: 'Projects Completed'  },
              { num: '12+',  label: 'Years Experience'    },
              { num: '98%',  label: 'Client Satisfaction' },
              { num: '50+',  label: 'Expert Team'         },
            ].map(s => (
              <div className="hero-stat" key={s.label}>
                <div className="hero-stat-number">{s.num}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section className="about section" id="about">
        <div className="container">
          <div className="about-grid">

            {/* Image frame */}
            <div className="about-image-frame reveal">
              <div className="about-img-placeholder">
                <span>SHA</span>
              </div>
              <div className="about-image-badge">
                <div className="badge-num">2014</div>
                <div className="badge-label">Est. in Kenya</div>
              </div>
            </div>

            {/* Content */}
            <div className="about-content reveal reveal-delay-1">
              <div className="section-eyebrow">
                <MS fill={1} wght={500}>info</MS> About Us
              </div>
              <h2 className="section-title">Africa's Premier Design &amp; Build Firm</h2>
              <div className="section-divider section-divider--left"></div>
              <p>
                Synergy Hub Africa is a dynamic design, build, and consultancy firm headquartered
                in Kenya. We specialize in creating architectural masterpieces that blend modern
                innovation with African heritage — bringing together architects, engineers,
                designers, and project managers who share a singular passion for excellence.
              </p>
              <p>
                From concept to completion, we partner with our clients to deliver spaces that
                inspire, function beautifully, and stand the test of time.
              </p>
              <div className="about-features">
                {[
                  { icon: 'architecture',      label: 'Innovative Designs'   },
                  { icon: 'construction',      label: 'Quality Construction' },
                  { icon: 'workspace_premium', label: 'Expert Consultancy'   },
                  { icon: 'schedule',          label: 'Timely Delivery'      },
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

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section className="services section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow"><MS fill={1} wght={500}>category</MS> What We Do</div>
            <h2 className="section-title">Our Services</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Comprehensive architectural solutions tailored to your vision, from initial concept through final construction.
            </p>
          </div>
          <div className="services-grid">
            {[
              { icon: 'architecture',   num: '01', title: 'Architectural Design',  desc: 'Stunning concepts that merge aesthetic excellence with functional practicality — detailed drawings, 3D visualisations, and master plans.' },
              { icon: 'construction',   num: '02', title: 'Build & Construction',   desc: 'From groundbreaking to completion, expert craftsmanship managing every aspect — quality, safety, timelines, and budgets.' },
              { icon: 'forum',          num: '03', title: 'Project Consultancy',    desc: 'Expert guidance on design, project management, feasibility studies, and technical reviews at every stage of your project.' },
              { icon: 'interior_design',num: '04', title: 'Interior Design',        desc: 'Bespoke interiors that reflect your identity and maximise functionality — residential, corporate, and hospitality.' },
              { icon: 'park',           num: '05', title: 'Urban Landscaping',      desc: 'Sustainable landscapes that connect people with nature and enhance the quality of your property.' },
              { icon: 'view_in_ar',     num: '06', title: '3D Visualisation',       desc: 'Photorealistic renderings and virtual walkthroughs so you can experience your project before construction begins.' },
            ].map((s, i) => (
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

      {/* ══════════════════════════════════════════
          WHY US
      ══════════════════════════════════════════ */}
      <section className="why-us section" id="why-us">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow"><MS fill={1} wght={500}>star</MS> Why Choose Us</div>
            <h2 className="section-title">Our Commitment to Excellence</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle" style={{ color: 'var(--text-mid)' }}>
              What sets Synergy Hub Africa apart is our unwavering commitment to quality and client satisfaction.
            </p>
          </div>
          <div className="why-us-grid">
            {[
              { icon: 'groups',        title: 'Expert Team',        desc: 'Highly skilled architects, engineers, and project managers with decades of combined industry experience.' },
              { icon: 'verified_user', title: 'Quality Guaranteed', desc: 'Premium materials and the highest construction and design standards, every single project.' },
              { icon: 'handshake',     title: 'Client-Centric',     desc: 'Your vision is our priority. We collaborate closely to ensure every detail meets your expectations.' },
              { icon: 'task_alt',      title: 'Timely Delivery',    desc: 'We respect your time and budget — delivering projects on schedule without compromising quality.' },
            ].map((w, i) => (
              <div className={`why-us-card reveal reveal-delay-${i + 1}`} key={w.title}>
                <div className="why-us-icon"><MS fill={1} wght={400}>{w.icon}</MS></div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PORTFOLIO
      ══════════════════════════════════════════ */}
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow"><MS fill={1} wght={500}>photo_library</MS> Our Work</div>
            <h2 className="section-title">Selected Projects</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              A curated showcase spanning residential, commercial, landscape, and heritage architecture.
            </p>
          </div>
          <div className="portfolio-grid">
            {[
              { icon: 'villa',          title: 'Luxury Residence',    loc: 'Nairobi, Kenya',  h5: 'Modern Luxury Villa',      desc: 'A stunning 5-bedroom residence featuring contemporary African design, sustainable materials, and panoramic views of the Nairobi skyline.' },
              { icon: 'corporate_fare', title: 'Commercial Tower',    loc: 'Nairobi, Kenya',  h5: 'Green Business Park',      desc: 'Eco-friendly complex with smart technology, rooftop gardens, and energy-efficient systems across 20 premium floors.' },
              { icon: 'forest',         title: 'Landscape Design',    loc: 'Mombasa, Kenya',  h5: 'Coastal Resort Gardens',   desc: 'Tropical landscape featuring indigenous flora, water features, and sustainable irrigation for a premier beachfront resort.' },
              { icon: 'location_city',  title: 'Urban Development',   loc: 'Kisumu, Kenya',   h5: 'Lakeside Estates',         desc: 'Master-planned community of 200 homes with integrated green spaces set against the shores of Lake Victoria.' },
              { icon: 'weekend',        title: 'Interior Design',     loc: 'Nairobi, Kenya',  h5: 'Executive Office Suites',  desc: 'Premium fit-out combining minimalism with African craftsmanship across 3 executive floors for a multinational corporation.' },
              { icon: 'account_balance',title: 'Heritage Restoration',loc: 'Lamu, Kenya',     h5: 'Swahili Heritage Hotel',   desc: 'Thoughtful restoration of a 19th-century Swahili stone house into a boutique hotel, preserving original features with modern amenities.' },
            ].map((p, i) => (
              <div className={`portfolio-item reveal reveal-delay-${(i % 3) + 1}`} key={p.title}>
                <div className="portfolio-item-inner">
                  <div className="portfolio-item-icon">
                    <MS fill={1} wght={300}>{p.icon}</MS>
                  </div>
                  <h4>{p.title}</h4>
                  <p className="portfolio-loc">
                    <MS fill={1} wght={400}>location_on</MS>{p.loc}
                  </p>
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <h5>{p.h5}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-cta reveal">
            <a
              href="https://wa.me/254737654264?text=Hello%20Synergy%20Hub%20Africa!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Start Your Project <MS>arrow_forward</MS>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════ */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow"><MS fill={1} wght={500}>contact_mail</MS> Get In Touch</div>
            <h2 className="section-title">Let's Build Together</h2>
            <div className="section-divider"></div>
            <p className="section-subtitle">
              Ready to bring your project to life? Reach out today for a no-obligation consultation.
            </p>
          </div>

          <div className="contact-grid">

            {/* Left — info */}
            <div className="contact-info reveal">
              <h3>Reach <span>Our Team</span></h3>
              <p>We'd love to hear about your project. Contact us through any of the channels below and we'll respond promptly.</p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon"><MS fill={1} wght={400}>call</MS></div>
                  <div className="contact-detail-text">
                    <h4>Phone</h4>
                    <p><a href="tel:+254799609700">+254 799 609 700</a></p>
                    <p><a href="tel:+254794980508">+254 794 980 508</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon"><MS fill={1} wght={400}>mail</MS></div>
                  <div className="contact-detail-text">
                    <h4>Email</h4>
                    <p><a href="mailto:synergyhubafrica@gmail.com">synergyhubafrica@gmail.com</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon"><MS fill={1} wght={400}>chat</MS></div>
                  <div className="contact-detail-text">
                    <h4>WhatsApp</h4>
                    <p>Chat with us directly:</p>
                    <div className="contact-whatsapp-buttons">
                      <a
                        href="https://wa.me/254737654264?text=Hello%20Synergy%20Hub%20Africa!"
                        target="_blank" rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                      >
                        <MS fill={1}>chat</MS> +254 737 654264
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form-wrapper reveal reveal-delay-1">
              <h4>Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Full Name</label>
                    <input id="cf-name" type="text" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email">Email Address</label>
                    <input id="cf-email" type="email" name="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-phone">Phone Number</label>
                    <input id="cf-phone" type="tel" name="phone" placeholder="+254 700 000 000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-service">Service Interested In</label>
                    <select id="cf-service" name="service">
                      <option value="">Select a service</option>
                      <option value="design">Architectural Design</option>
                      <option value="build">Build &amp; Construction</option>
                      <option value="consultancy">Consultancy</option>
                      <option value="landscaping">Landscaping</option>
                      <option value="interior">Interior Design</option>
                      <option value="3d">3D Visualisation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Project Details</label>
                  <textarea id="cf-message" name="message" placeholder="Tell us about your project, timeline, and budget..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit-btn">
                  Send Message <MS>send</MS>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

/* ─────────────────────────────────────────────
   Hero right-panel — uses CSS classes only
───────────────────────────────────────────── */
function HeroCard() {
  const items = [
    { icon: 'architecture',  title: 'Design',    sub: 'Architectural excellence' },
    { icon: 'construction',  title: 'Build',     sub: 'From ground to rooftop'   },
    { icon: 'forum',         title: 'Consult',   sub: 'Expert project guidance'  },
  ]
  return (
    <div className="hero-card-panel">
      {items.map(c => (
        <div className="hero-card-item" key={c.title}>
          <div className="hero-card-icon">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: `'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24` }}
            >
              {c.icon}
            </span>
          </div>
          <div className="hero-card-text">
            <div className="hero-card-title">{c.title}</div>
            <div className="hero-card-sub">{c.sub}</div>
          </div>
          <div className="hero-card-arrow">
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </div>
      ))}
    </div>
  )
}
