import Section from '../components/SectionWrapper.jsx'

export default function About(){
  return (
    <Section title="About" subtitle="A brief intro">
      <div className="card" style={{padding:22}}>
        <p>
          I’m a Graduate Data Science student at the University at Buffalo (Aug 2024 – Dec 2025, GPA 3.9/4.0) with 2.5+ years building
          ML systems at scale. I specialize in modern data/ML stacks—Spark, Kafka, TensorFlow/PyTorch—and cloud-native deployments on Kubernetes across AWS/GCP.
        </p>
        <p className="mute">
          I turn ambiguous data problems into measurable outcomes using clean engineering, experimentation, and pragmatic MLOps.
        </p>
      </div>
    </Section>
  )
}
