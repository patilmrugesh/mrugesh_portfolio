
import { Briefcase, CheckCircle } from 'lucide-react'
import '../styles/ClientWork.css'

function ClientWork() {
  const clientProjects = [
    {
      client: "TechCorp Solutions",
      project: "E-Commerce Backend Migration",
      description: "Migrated monolithic e-commerce platform to microservices architecture, reducing deployment time by 70% and improving system reliability.",
      tech: ["Spring Boot", "Kubernetes", "PostgreSQL", "Redis"],
      duration: "3 months",
      deliverables: [
        "Designed and implemented 8 microservices",
        "Set up CI/CD pipeline with Jenkins",
        "Implemented API gateway and service mesh",
        "Reduced API response time by 40%"
      ]
    },
    {
      client: "FinanceFlow Inc",
      project: "Payment Processing System",
      description: "Built secure payment processing system handling 10,000+ daily transactions with PCI-DSS compliance and fraud detection.",
      tech: ["Java", "Spring Security", "MySQL", "Kafka"],
      duration: "4 months",
      deliverables: [
        "Implemented secure payment gateway",
        "Integrated multiple payment providers",
        "Built real-time fraud detection system",
        "Achieved 99.9% uptime"
      ]
    },
    {
      client: "DataStream Analytics",
      project: "Real-time Data Pipeline",
      description: "Created scalable data pipeline processing 5M+ events per day with real-time analytics and reporting capabilities.",
      tech: ["Kafka", "Elasticsearch", "Spring Boot", "AWS"],
      duration: "2 months",
      deliverables: [
        "Built event-driven data pipeline",
        "Implemented custom analytics engine",
        "Created real-time dashboard",
        "Reduced data processing time by 60%"
      ]
    }
  ]

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        <h2 className="section-title">
          <span className="title-arrow pink">&gt;</span>
          <span>Client Work</span>
        </h2>

        <div className="clients-grid">
          {clientProjects.map((work, idx) => (
            <div key={idx} className="client-card">
              <div className="client-header">
                <Briefcase size={28} className="client-icon" />
                <div className="client-meta">
                  <h3 className="client-name">{work.client}</h3>
                  <span className="project-duration">{work.duration}</span>
                </div>
              </div>

              <h4 className="project-title">{work.project}</h4>
              <p className="project-desc">{work.description}</p>

              <div className="tech-stack">
                {work.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="deliverables">
                <h5>Key Deliverables</h5>
                <ul>
                  {work.deliverables.map((item, i) => (
                    <li key={i}>
                      <CheckCircle size={16} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientWork

