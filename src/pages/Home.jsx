import { motion } from 'framer-motion'
// import profilePic from '../assets/profile.jpg';


export default function Home(){
  return (
    <header className="section" style={{paddingTop:120,paddingBottom:80}}>
      <div className="container home" style={{display:'grid', gap:28, gridTemplateColumns:'1.1fr 1fr', alignItems:'center'}}>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
            style={{fontSize:'3.3rem', lineHeight:1.08, margin:'0 0 10px'}}
          >
            Hi, I’m <span style={{color:'var(--accent-b)'}}>Bharathraaj</span> <br></br>
            I craft <em style={{fontStyle:'normal', color:'var(--accent-c)'}}>production-grade</em> AI/ML systems.
          </motion.h1>

          <motion.p className="mute" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}}>
            Graduate Data Science student @ University at Buffalo (GPA 3.9/4.0) with 2.5+ years delivering scalable models • Ex-TCS Big Data AI Developer • ML Infrastructure & GenAI • Seeking Full Time Dec ’26
          </motion.p>

          <div style={{display:'flex', gap:12, marginTop:26, flexWrap:'wrap'}}>
            <a className="btn btn-primary" href="/Bharathraaj_Nagarajan_Resume.pdf" download>Download Resume</a>
            <a className="btn" href="mailto:bharathraajnagarajan@gmail.com">Contact Me</a>
          </div>

          <hr className="soft"/>
          <div className="badges">
            {['Spark','TensorFlow','PyTorch','Kubernetes','GCP','SQL','LangChain/LLMs'].map(tag => (
              <span key={tag} className="badge">{tag}</span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ scale:.92, opacity: 0 }}
          animate={{ scale:1, opacity: 1 }}
          transition={{ duration: .8 }}
          style={{display:'grid', placeItems:'center'}}
        >
          
            <img 
              src="/assets/profile.jpg" 
              alt="Bharathraaj" 
              style={{
                width: '80%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--surface)'
              }}
            />
          
        </motion.div>
      </div>
    </header>
  )
}
