
import '../styles/Experiments.css'

function Experiments() {
  const experiments = [
    "Custom ORM Framework • Built lightweight Java ORM with query optimization",
    "CLI Deployment Tool • Automated Docker deployment pipeline with zero-downtime",
    "JWT Auth Library • Secure token management with refresh token rotation",
    "Database Migration Tool • Schema versioning system for PostgreSQL"
  ]

  return (
    <section id="experiments" className="experiments-section">
      <div className="experiments-container">
        <h2 className="section-title">
          <span className="title-arrow purple">&gt;</span>
          <span>Experiments</span>
        </h2>

        <div className="experiments-grid">
          {experiments.map((exp, idx) => (
            <div key={idx} className="experiment-card">
              <span className="experiment-arrow">→</span>
              <p className="experiment-text">{exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiments