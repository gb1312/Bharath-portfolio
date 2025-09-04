import Section from '../components/SectionWrapper.jsx'

const projects = [
  {
    name: "AI Insights Engine",
    description: "Real-time analytics with ML pipelines (TensorFlow/PyTorch) deployed via Kubernetes; −35% deployment time and +40% processing efficiency.",
    stack: ["Spark-ML", "TensorFlow", "PyTorch", "Kubernetes", "AWS/GCP"],
    link: "https://github.com/BharathraajNagarajan?tab=repositories"
  }
]

export default function Projects(){
  return (
    <Section title="Projects" subtitle="Selected work with visuals">
      <div className="grid two">
        {projects.map((p, i)=> (
          <div key={i} className="card tilt" style={{padding:20}} onMouseMove={(e)=>{
            const r = e.currentTarget.getBoundingClientRect()
            const x = (e.clientX - r.left)/r.width - .5
            const y = (e.clientY - r.top)/r.height - .5
            e.currentTarget.style.setProperty('--ry', `${x*12}deg`)
            e.currentTarget.style.setProperty('--rx', `${-y*12}deg`)
          }} onMouseLeave={(e)=>{
            e.currentTarget.style.setProperty('--ry', '0deg')
            e.currentTarget.style.setProperty('--rx', '0deg')
          }}>
            <h3 style={{marginBottom:4}}>{p.name}</h3>
            <p className="mute" style={{marginTop:0}}>{p.description}</p>
            <div className="badges" style={{marginTop:10}}>
              {p.stack.map((t, j)=> <span className="badge" key={j}>{t}</span>)}
            </div>
            <div style={{marginTop:14}}>
              <a className="btn btn-primary" href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>


          
        ))}
      </div>
    </Section>
  )
}
