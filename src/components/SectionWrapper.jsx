import { motion } from 'framer-motion'

export default function Section({ title, subtitle, children }){
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
        >
          {title && <h2>{title}</h2>}
          {subtitle && <p className="mute" style={{marginTop:-6}}>{subtitle}</p>}
          <div style={{marginTop: 18}} className="grid">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
