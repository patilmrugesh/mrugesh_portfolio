import { useState, useEffect } from 'react'
import { Terminal, Code2, Database, Cloud, Lock, Container, Download, ArrowRight, Sparkles } from 'lucide-react'
import '../styles/Hero.css'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = "I build scalable systems, not just apps."
  
  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  const techStack = [
    { icon: <Database size={28} />, name: 'Database' },
    { icon: <Cloud size={28} />, name: 'Cloud' },
    { icon: <Lock size={28} />, name: 'Security' },
    { icon: <Container size={28} />, name: 'Docker' },
    { icon: <Code2 size={28} />, name: 'Code' }
  ]

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Terminal cursor effect */}
          <div className="terminal-header">
            <Terminal size={20} />
            <span className="terminal-path">~/portfolio</span>
            <span className="cursor-blink">▊</span>
          </div>

          <div className="title-wrapper">
            <h1 className="hero-title">
              <span className="title-line">
                <span className="gradient-text animated-gradient">Full-Stack</span>
              </span>
              <span className="title-line">
                <span className="white-text">Developer</span>
              </span>
            </h1>
            <div className="title-decoration">
              <Sparkles size={32} className="sparkle-icon" />
            </div>
          </div>

          <div className="subtitle-wrapper">
            <div className="subtitle-badge">
              <span className="badge-dot"></span>
              <span>Computer Science Student</span>
            </div>
          </div>

          <p className="hero-tagline">
            {displayText}<span className="typing-cursor">|</span>
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={20} className="btn-icon" />
            </a>
            <a href="/src/resume.pdf" download className="btn-secondary">
              <Download size={20} className="btn-icon-download" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Tech stack icons */}
          <div className="tech-stack-section">
            <span className="tech-label">Tech Stack</span>
            <div className="tech-icons">
              {techStack.map((tech, idx) => (
                <div key={idx} className="tech-item" title={tech.name}>
                  <div className="tech-icon-wrapper">
                    {tech.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
{/*
        {/* Profile Image */}
        <div className="hero-image">
          <div className="image-border">
            <div className="image-frame">
              <img 
                src="/src/profile1.jpg" 
                alt="Profile" 
                className="profile-pic"
              />
            </div>
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
          </div>
        </div>
      </div>
      

      {/* Glow effects */}
      <div className="glow-effect glow-1"></div>
      <div className="glow-effect glow-2"></div>
      <div className="grid-overlay"></div>
    </section>
  )
}

export default Hero