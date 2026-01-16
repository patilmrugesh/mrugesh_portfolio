import { useEffect } from 'react'
import { X, Github, ExternalLink, Code2 } from 'lucide-react'
import '../styles/ProjectOverview.css'

function ProjectOverview({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon-wrapper">
            <Code2 size={40} className="modal-icon" />
          </div>
          <h2 className="modal-title">{project.name}</h2>
        </div>

        {/* Content */}
        <div className="modal-body">
          <div className="overview-section">
            <h3 className="overview-heading">
              <span className="heading-line"></span>
              Overview
            </h3>
            <p className="overview-text">{project.overview}</p>
          </div>

          <div className="overview-section">
            <h3 className="overview-heading">
              <span className="heading-line"></span>
              Description
            </h3>
            <p className="overview-text">{project.description}</p>
          </div>

          <div className="overview-section">
            <h3 className="overview-heading">
              <span className="heading-line"></span>
              Tech Stack
            </h3>
            <div className="modal-tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="modal-tech-badge">
                  <span className="modal-tech-dot"></span>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="modal-footer">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-action-btn github"
          >
            <Github size={20} />
            <span>View Code</span>
          </a>
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-action-btn demo"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectOverview