import Section from '../components/SectionWrapper.jsx'

const schools = [
  {
    name: "University at Buffalo, The State University of New York",
    degree: "MPS, Data Sciences and Applications (GPA: 3.9/4.0)",
    details: [
      "Courses: Statistical Data Mining, ML, DBMS, Cybersecurity",
      "CDA 500: industry MVP project",
      "Grader: EAS 230 – Engineering Computations (MATLAB/DSA)"
    ],
    when: "Aug 2024 — Dec 2025",
  },
  {
    name: "Anna University — SSN College of Engineering",
    degree: "B.E., Minor in Computer Science",
    when: "Aug 2017 — May 2021",
  }
]

export default function Education(){
  return (
    <Section title="Education" subtitle="Degrees & highlights">
      <div className="grid two">
        {schools.map((s, i) => (
          <div key={i} className="card tilt" style={{padding:20}} onMouseMove={(e)=>{
            const r = e.currentTarget.getBoundingClientRect()
            const x = (e.clientX - r.left)/r.width - .5
            const y = (e.clientY - r.top)/r.height - .5
            e.currentTarget.style.setProperty('--ry', `${x*10}deg`)
            e.currentTarget.style.setProperty('--rx', `${-y*10}deg`)
          }} onMouseLeave={(e)=>{
            e.currentTarget.style.setProperty('--ry', '0deg')
            e.currentTarget.style.setProperty('--rx', '0deg')
          }}>
            <h3 style={{marginBottom:4}}>{s.name}</h3>
            <p style={{margin:0}}>{s.degree}</p>
            
            {/* Render bullet points if available */}
            {s.details && (
              <ul style={{marginTop:6, paddingLeft:20}}>
                {s.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
            
            <p className="mute" style={{marginTop:6}}>{s.when}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
