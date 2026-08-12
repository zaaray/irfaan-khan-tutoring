import { useState } from 'react'
import logo from './assets/logo.png'
import irfaan from './assets/irfaan.webp'

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/irfaan.khan.tutoring',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.4" />
        <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100092210661696',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21.5v-7.6h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.49-1.46h1.6V4.86c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.41-3.9 4v2.16H7.75v3h2.6v7.6h3.15z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/irfaan-khan-44b62713b/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.94H3.56V20.5h3.38V8.94zM5.25 7.42a1.96 1.96 0 1 0 0-3.92 1.96 1.96 0 0 0 0 3.92zM20.5 14.15c0-3.32-1.77-4.86-4.13-4.86-1.9 0-2.76 1.05-3.24 1.79V8.94H9.75V20.5h3.38v-6.03c0-1.6.73-2.55 2.13-2.55 1.36 0 1.86 1.02 1.86 2.55v6.03h3.38v-6.35z" />
      </svg>
    ),
  },
]

const SERVICES = [
  { title: 'Homework Help', desc: 'Stay on top of coursework with guided, step-by-step support.', emoji: '📝' },
  { title: 'Test & Quiz Prep', desc: 'Targeted practice and strategy for upcoming assessments.', emoji: '🎯' },
  { title: 'Final Exam Prep', desc: 'Structured review plans to walk into finals with confidence.', emoji: '📚' },
  { title: 'SAT / ACT Prep', desc: 'Proven strategies from a perfect SAT Math scorer (800).', emoji: '🏆' },
  { title: 'AP Exam Prep', desc: 'Deep content review and practice for AP math and science exams.', emoji: '🧠' },
  { title: 'Remedial & Enrichment', desc: 'Catch up on fundamentals or push beyond the classroom.', emoji: '🚀' },
]

const MATH_SUBJECTS = [
  'Algebra / Algebra I',
  'Geometry',
  'Advanced Algebra / Algebra II',
  'Precalculus / AP Precalculus',
  'AP Calculus AB / BC',
  'Multivariable & Differential Calculus',
  'SAT / ACT Math',
]

const SCIENCE_SUBJECTS = [
  'Biology / AP Biology',
  'Chemistry / AP Chemistry',
  'Physics / AP Physics I & II',
]

const PRICING = [
  { tier: 'Middle School', online: 40, inPerson: 50, note: 'Grades 6–8 math & science' },
  { tier: 'High School', online: 50, inPerson: 55, note: 'Regents, honors & standard courses', featured: true },
  { tier: 'Advanced', online: 55, inPerson: 60, note: 'AP courses, SAT/ACT & college-level' },
]

const QUALIFICATIONS = [
  { title: 'Perfect SAT Math Score', detail: '800 / 800 on the math section' },
  { title: 'B.E. Biomedical Engineering', detail: 'Stony Brook University, Class of 2022' },
  { title: 'Top 10 Graduate', detail: 'Hicksville High School Class of 2018 — 101.76 GPA' },
  { title: 'Lead Instructor, 4+ Years', detail: 'Mathnasium of Levittown' },
  { title: 'University Peer Tutor & TA', detail: 'Stony Brook University — peer tutor and intro biology lab TA' },
  { title: 'VAD Engineer', detail: 'Emory University Hospital' },
]

const TESTIMONIALS = [
  {
    name: 'Brianna',
    quote: 'He is very patient and took his time to thoroughly explain problems and why they are correct.',
  },
  {
    name: 'Andrew',
    quote: 'Was respectful and courteous upon entry to the home, was patient and very helpful with my daughter.',
  },
  {
    name: 'Makeba',
    quote: "Knowledgeable in the area that he's tutoring. I would definitely recommend him.",
  },
]

const NAV_LINKS = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Subjects', '#subjects'],
  ['Pricing', '#pricing'],
  ['Reviews', '#reviews'],
]

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Irfaan Khan Tutoring logo" />
          <span>Irfaan Khan Tutoring</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="#intake" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Book a Session
          </a>
        </nav>
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">New York · Metro Atlanta · Online</p>
          <h1>
            Math &amp; science tutoring that <span className="accent">builds confidence</span>
          </h1>
          <p className="hero-sub">
            Online and in-person private tutoring based in New York and Metro Atlanta, Georgia.
            From algebra to AP Calculus, biology to physics — get one-on-one support from an
            engineer who scored a perfect 800 on SAT Math.
          </p>
          <div className="hero-cta">
            <a href="#intake" className="btn btn-primary">Book a Session</a>
            <a href="#pricing" className="btn btn-ghost">View Pricing</a>
          </div>
          <div className="hero-stats">
            <div><strong>5+</strong><span>years tutoring</span></div>
            <div><strong>800</strong><span>SAT Math score</span></div>
            <div><strong>10+</strong><span>subjects covered</span></div>
          </div>
        </div>
        <div className="hero-photo">
          <div className="photo-frame">
            <img src={irfaan} alt="Irfaan Khan, math and science tutor" />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <p className="eyebrow">About</p>
        <h2>Hi, I&rsquo;m Irfaan 👋</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Irfaan Khan Tutoring is dedicated to helping you reach your educational goals.
              Whether you are a student looking for help in math or science, or a parent looking
              for someone to give your child additional academic support, I am here to help.
            </p>
            <p>
              I am a VAD Engineer at Emory University Hospital with over 5+ years of tutoring
              experience. My experience as a biomedical engineer ignited my passion for teaching
              and mentoring others in STEM subjects, allowing me to provide exceptional academic
              support that benefits students.
            </p>
            <p>
              Outside of work and tutoring, you&rsquo;ll find me swimming, gaming, exploring
              parks, and traveling.
            </p>
          </div>
          <ul className="qual-list">
            {QUALIFICATIONS.map((q) => (
              <li key={q.title}>
                <strong>{q.title}</strong>
                <span>{q.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h2>Support for every kind of learner</h2>
        <div className="card-grid">
          {SERVICES.map((s) => (
            <div className="card" key={s.title}>
              <div className="card-emoji">{s.emoji}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Subjects() {
  return (
    <section className="section" id="subjects">
      <div className="container">
        <p className="eyebrow">Subjects</p>
        <h2>What I teach</h2>
        <div className="subjects-grid">
          <div className="subject-panel">
            <h3>➗ Mathematics</h3>
            <ul>
              {MATH_SUBJECTS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="subject-panel">
            <h3>🔬 Science</h3>
            <ul>
              {SCIENCE_SUBJECTS.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p className="subject-note">
              Don&rsquo;t see your course listed? <a href="#intake">Reach out</a> — I can likely help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <p className="eyebrow">Pricing</p>
        <h2>Simple hourly rates</h2>
        <div className="pricing-grid">
          {PRICING.map((p) => (
            <div className={`price-card ${p.featured ? 'featured' : ''}`} key={p.tier}>
              <h3>{p.tier}</h3>
              <p className="price-note">{p.note}</p>
              <div className="price-rows">
                <div className="price-row">
                  <span>Online</span>
                  <strong>${p.online}<em>/hr</em></strong>
                </div>
                <div className="price-row">
                  <span>In-person</span>
                  <strong>${p.inPerson}<em>/hr</em></strong>
                </div>
              </div>
              <a href="#intake" className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'} btn-block`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="pricing-footnote">Rates are negotiable — let&rsquo;s find something that works.</p>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <p className="eyebrow">Reviews</p>
        <h2>What families are saying</h2>
        <div className="card-grid">
          {TESTIMONIALS.map((t) => (
            <figure className="testimonial" key={t.name}>
              <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const INITIAL_FORM = {
  parentName: '',
  email: '',
  phone: '',
  studentName: '',
  gradeLevel: '',
  subjects: '',
  service: '',
  format: '',
  location: '',
  availability: '',
  message: '',
}

function IntakeForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/irfaankkhan@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New tutoring inquiry from ${form.parentName || form.studentName}`,
          _template: 'table',
          ...form,
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section section-alt" id="intake">
      <div className="container intake">
        <div className="intake-copy">
          <p className="eyebrow">Get Started</p>
          <h2>Student intake form</h2>
          <p>
            Tell me a bit about the student and what you&rsquo;re looking for, and I&rsquo;ll get
            back to you within 24 hours to schedule a first session.
          </p>
          <div className="intake-contact">
            <a href="tel:+16076843537">📞 (607) 684-3537</a>
            <a href="mailto:irfaankkhan@gmail.com">✉️ irfaankkhan@gmail.com</a>
          </div>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {status === 'sent' ? (
          <div className="form-success">
            <h3>Thanks! 🎉</h3>
            <p>Your inquiry is on its way. I&rsquo;ll be in touch within 24 hours.</p>
            <button className="btn btn-ghost" onClick={() => setStatus('idle')}>
              Submit another
            </button>
          </div>
        ) : (
          <form className="intake-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Parent / guardian name*
                <input required value={form.parentName} onChange={set('parentName')} placeholder="Jane Doe" />
              </label>
              <label>
                Student name
                <input value={form.studentName} onChange={set('studentName')} placeholder="Alex Doe" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Email*
                <input type="email" required value={form.email} onChange={set('email')} placeholder="you@email.com" />
              </label>
              <label>
                Phone
                <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 555-5555" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Grade level*
                <select required value={form.gradeLevel} onChange={set('gradeLevel')}>
                  <option value="">Select…</option>
                  <option>Middle school (6–8)</option>
                  <option>High school (9–12)</option>
                  <option>AP / Advanced</option>
                  <option>College</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Service needed*
                <select required value={form.service} onChange={set('service')}>
                  <option value="">Select…</option>
                  <option>Homework help</option>
                  <option>Test / quiz prep</option>
                  <option>Final exam prep</option>
                  <option>SAT / ACT prep</option>
                  <option>AP exam prep</option>
                  <option>Remedial help</option>
                  <option>Enrichment</option>
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>
                Format*
                <select required value={form.format} onChange={set('format')}>
                  <option value="">Select…</option>
                  <option>Online</option>
                  <option>In-person</option>
                  <option>Either</option>
                </select>
              </label>
              <label>
                Location
                <select value={form.location} onChange={set('location')}>
                  <option value="">Select…</option>
                  <option>New York</option>
                  <option>Metro Atlanta, GA</option>
                  <option>Other / online only</option>
                </select>
              </label>
            </div>
            <label>
              Subject(s)*
              <input
                required
                value={form.subjects}
                onChange={set('subjects')}
                placeholder="e.g. Algebra II, AP Chemistry"
              />
            </label>
            <label>
              General availability
              <input
                value={form.availability}
                onChange={set('availability')}
                placeholder="e.g. weekday evenings, Saturday mornings"
              />
            </label>
            <label>
              Anything else I should know?
              <textarea
                rows="4"
                value={form.message}
                onChange={set('message')}
                placeholder="Goals, upcoming tests, current grades, learning style…"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
            </button>
            {status === 'error' && (
              <p className="form-error">
                Something went wrong. Please email{' '}
                <a href="mailto:irfaankkhan@gmail.com">irfaankkhan@gmail.com</a> directly.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="" />
          <div>
            <strong>Irfaan Khan Tutoring</strong>
            <span>Math &amp; science tutoring · New York &amp; Metro Atlanta, GA</span>
          </div>
        </div>
        <div className="socials">
          {SOCIALS.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>
              {s.icon}
            </a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Irfaan Khan Tutoring. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Subjects />
        <Pricing />
        <Testimonials />
        <IntakeForm />
      </main>
      <Footer />
    </>
  )
}
