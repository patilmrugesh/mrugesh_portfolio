import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react'
import '../styles/Journey.css'

function Journey() {
  const [visibleItems, setVisibleItems] = useState([])
  const timelineRef = useRef(null)

  const journey = [
    {
      year: "2021-2024",
      title: "Diploma in Computer Engineering",
      institute: "MSBTE - 92.91%",
      icon: <Award size={24} />,
      highlights: ["Data Structures", "Web Development", "Database Management"]
    },
    {
        year: "2024-Present",
        title: "B.E. in Computer Science",
        institute: "PVG's College of Engineering and Technology, Pune",
        university: "SPPU - 8.62/10",
        icon: <GraduationCap size={24} />,
        highlights: ["Advanced Algorithms", "Software Engineering", "System Design"]
      }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2, rootMargin: '-50px' }
    )

    const items = document.querySelectorAll('.timeline-item')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        <h2 className="section-title">
          <span className="title-arrow purple">
            <Sparkles size={36} />
          </span>
          <span>Education</span>
        </h2>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-progress"></div>
          </div>
          
          {journey.map((item, idx) => (
            <div 
              key={idx}
              data-index={idx}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'} ${
                visibleItems.includes(idx) ? 'visible' : ''
              }`}
            >
              <div className="timeline-content">
                <div className="content-header">
                  <div className="timeline-icon">{item.icon}</div>
                  <div className="timeline-year">{item.year}</div>
                </div>
                
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-achievement">{item.institute}</p>
                <p className="timeline-achievement">{item.university}</p>
                
                <div className="timeline-highlights">
                  {item.highlights.map((highlight, i) => (
                    <span key={i} className="highlight-badge">
                      <BookOpen size={12} />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="timeline-dot">
                <div className="dot-inner"></div>
                <div className="dot-pulse"></div>
                <div className="dot-ring"></div>
              </div>
            </div>
          ))}

          <div className="journey-end">
            {/* <div className="end-marker">
              <Sparkles size={20} />
            </div> */}
            {/* <p className="end-text">The Journey Continues...</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey