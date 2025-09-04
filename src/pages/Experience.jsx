import Section from '../components/SectionWrapper.jsx'
import { motion } from 'framer-motion'

const roles = [
  {
    role: "Systems Engineer 3 — Big Data AI Developer",
    company: "Tata Consultancy Services",
    duration: "Feb 2023 — Apr 2024",
    bullets: [
      "Built supervised/unsupervised/semi-supervised models; +18% predictive accuracy.",
      "Designed E2E ML pipelines; +28% deployment speed & efficiency.",
      "Optimized DL with TensorFlow/PyTorch; +15% classification accuracy.",
      "Applied NLP & CV for analytics; reduced manual operations via GenAI.",
      "Maintained Cloudera big-data stack; reduced bottlenecks in ML infra.",
      "Kafka/HDFS/HBase/Kudu tuning; −40% query latency.",
      "Deployed to K8s with 99.9% uptime in production."
    ]
  },
  {
    role: "System Engineer 2 — Big Data Python Developer",
    company: "Tata Consultancy Services",
    duration: "May 2022 — Feb 2023",
    bullets: [
      "Optimized PySpark jobs; −47% ETL time.",
      "Real-time data pipelines on AWS/GCP; −31% processing lag.",
      "Automated ingest/transform/validate; +25% data quality."
    ]
  },
  {
    role: "System Engineer 1 — Data Analyst",
    company: "Tata Consultancy Services",
    duration: "Oct 2021 — May 2022",
    bullets: [
      "Analyzed 100M+ financial records; +15% fraud detection accuracy.",
      "SQL tuning; −45% retrieval time; reported to UK clients.",
      "Risk models for banking; +20% loan approval efficiency.",
      "10+ dashboards (Power BI/Tableau); +30% reporting efficiency."
    ]
  }
]

export default function Experience(){
  return (
    <Section title="Experience" subtitle="A timeline of impact">
      <div className="grid">
        {roles.map((r, i)=> (
          <motion.div
            key={i}
            className="card"
            style={{padding:20, position:'relative'}}
            initial={{ opacity: 0, x: i%2?20:-20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
          >
            <div style={{position:'absolute', left:-6, top:22, width:12, height:12, borderRadius:999, background:'var(--accent-b)'}}/>
            <h3 style={{marginBottom:4}}>{r.role} <span className="mute">• {r.company}</span></h3>
            <p className="mute" style={{marginTop:0}}>{r.duration}</p>
            <ul style={{marginTop:10, paddingLeft:18}}>
              {r.bullets.map((b, j)=> <li key={j}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
