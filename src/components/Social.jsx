import { Github, Linkedin, Instagram, Twitter, Mail, ExternalLink } from 'lucide-react'
import '../styles/Social.css'

function Social() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={28} />,
      url: 'https://github.com/patilmrugesh',
      color: 'github',
      username: '@patilmrugesh'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={28} />,
      url: 'https://linkedin.com/in/mrugesh-patil',
      color: 'linkedin',
      username: '/in/mrugesh-patil'
    },
    {
      name: 'X',
      icon: <Twitter size={28} />,
      url: 'https://twitter.com/patil_mrugeshh',
      color: 'twitter',
      username: '@patil_mrugeshh'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={28} />,
      url: 'https://instagram.com/patil__mrugesh',
      color: 'instagram',
      username: '@patil__mrugesh'
    }
  ]

  return (
    <section id="social" className="social-section">
      <div className="social-container">
        <div className="social-header">
          <h2 className="section-title">
            <span className="title-arrow">&gt;</span>
            <span>Let's Connect</span>
          </h2>
          <p className="social-subtitle">
            Follow me on social media and let's stay connected
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-card ${link.color}`}
            >
              <div className="card-background"></div>
              <div className="card-content">
                <div className="icon-wrapper">
                  {link.icon}
                </div>
                <div className="card-info">
                  <h3 className="platform-name">{link.name}</h3>
                  <p className="username">{link.username}</p>
                </div>
                <div className="external-icon">
                  <ExternalLink size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="email-cta">
          <Mail size={24} className="email-icon" />
          <div className="email-content">
            <span className="email-label">Prefer email?</span>
            <a href="mailto:your.patilmrugesh84@gmal.com" className="email-link">
              patilmrugesh84@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="social-decoration">
        <div className="decoration-line line-1"></div>
        <div className="decoration-line line-2"></div>
        <div className="decoration-line line-3"></div>
      </div>
    </section>
  )
}

export default Social