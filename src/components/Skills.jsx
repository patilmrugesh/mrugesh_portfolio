import { Code2, Database, Cloud, Wrench, Server, Boxes } from 'lucide-react'
import '../styles/Skills.css'

function Skills() {
  const skillsData = {
    languages: [
      { name: 'Java', icon: '☕' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗄️' },
      { name: 'C++', icon: '⚙️' }
    ],
    frameworks: [
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Hibernate', icon: '💾' }
    ],
    databases: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🐬' }
    ],
    tools: [
      { name: 'Git', icon: '📦' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Postman', icon: '📮' },
      { name: 'Maven', icon: '🔨' },
      { name: 'Figma', icon: '🎨' },
      { name: 'Wix', icon: '🌐' }
    ]
  }

  const getCategoryIcon = (category) => {
    const icons = {
      languages: <Code2 size={20} />,
      frameworks: <Boxes size={20} />,
      databases: <Database size={20} />,
      tools: <Wrench size={20} />,
      cloud: <Cloud size={20} />,
      concepts: <Server size={20} />
    }
    return icons[category]
  }

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">
          <span className="title-arrow orange">{'> '}</span>
          Tech Stack
        </h2>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="category-title">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
              </div>

              <div className="skills-list">
                {skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills