import { useState } from 'react'
import { Code2, Github, ExternalLink, Info } from 'lucide-react'
import ProjectOverview from './ProjectOverview'
import '../styles/Projects.css'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const projects = [
    {
      "name": "ProctorX - AI Proctored Exam Platform",
      "description": "Secure online examination system with AI-based proctoring, real-time monitoring, and code execution sandbox.",
      "tech": ["React", "Spring Boot", "Spring Security", "Docker", "PostgreSQL", "WebSockets", "JWT"],
      "github": "https://github.com/patilmrugesh/proctorx",
      "demo": "https://proctorx-demo.com",
      "overview": "A comprehensive online assessment platform designed to prevent academic dishonesty. It enforces fullscreen mode, detects tab switching, and streams live webcam feeds using WebSockets for real-time judge monitoring. The system includes a Docker-based secure sandbox for multi-language code execution (C++/Python) and supports both DSA and MCQ exams with real-time evaluation."
    },
    {
      name: "CloudVault — Secure File Storage Platform",
      description: "Secure file storage backend with JWT-based authentication and role-based access control.",
      tech: ["React","Java", "Spring Boot", "Spring Security", "JWT", "Hibernate/JPA", "MySQL", "REST APIs"],
      github: "https://github.com/patilmrugesh/cloudvault",
      demo: "https://cloudvault-demo.com",
      overview: "Built a secure Spring Boot backend for file upload and download using REST APIs.\n• Implemented JWT authentication with role-based authorization for users and admins.\n• Used Hibernate/JPA with MySQL for efficient management of file metadata and user data.\n• Designed a modular, scalable, and maintainable backend architecture following best practices."
    },
    {
      name: "LegalAssist - AI Legal Assistance",
      description: "AI-powered legal assistance platform for case tracking, legal Q&A, and lawyer-client communication.",
      tech: ["React", "JavaScript", "Node.js", "MongoDB", "JWT", "Gemini API", "OpenAI API", "REST APIs"],
      github: "https://github.com/patilmrugesh/legalassist",
      demo: "https://legalassist-demo.com",
      overview: "Built an AI-driven legal assistance platform enabling users to ask legal questions, track cases, and communicate securely with lawyers.\n• Integrated Gemini/OpenAI APIs for intelligent legal Q&A.\n• Implemented JWT-based authentication and secure messaging.\n• Deployed for mock usage by 5+ users and showcased at national-level competitions."
    }
    
  ]

  const handleOverview = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="title-arrow blue">&gt;</span>
          <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <Code2 size={32} className="project-icon" />
                </div>
                
                <div className="project-actions">
                  <button 
                    onClick={() => handleOverview(project)}
                    className="action-btn overview-btn"
                    title="View Overview"
                  >
                    <Info size={18} />
                  </button>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn demo-btn"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn github-btn"
                    title="Source Code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    <span className="tech-dot"></span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Overview Modal */}
      <ProjectOverview 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Projects