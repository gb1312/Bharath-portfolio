import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Education from './pages/Education.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import Sparkles from './components/Sparkles.jsx'

export default function App(){
  useEffect(()=>{
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ?? (prefersDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('light', initial === 'light')
  },[])

  const setTheme = (t)=>{
    localStorage.setItem('theme', t)
    document.documentElement.classList.toggle('light', t === 'light')
  }

  const location = useLocation()

  const page = (children)=> (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: .5 }}
    >
      {children}
    </motion.main>
  )

  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/experience', 'Experience'],
    ['/education', 'Education'],
    ['/projects', 'Projects'],
    ['/skills', 'Skills'],
    ['/contact', 'Contact'],
  ]

  return (
    <div>
      <Sparkles />
      <nav className="sticky">
        <div className="container" style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 0'}}>
          <NavLink to="/" className="brand">BN<span style={{color:'var(--accent-b)'}}>.</span></NavLink>
          <div style={{display:'flex', gap:14, alignItems:'center', flexWrap:'wrap'}}>
            {links.map(([to, label])=> (
              <NavLink key={to} to={to} style={({isActive})=>({
                padding: '8px 12px', borderRadius: 12, border: '1px solid var(--surface)',
                background: isActive ? 'var(--card)' : 'transparent'
              })}>{label}</NavLink>
            ))}
            <a className="btn" href="/Bharathraaj_Nagarajan_Resume.pdf" download><Download size={18}/> Resume</a>
            <ThemeToggle onChange={setTheme}/>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={page(<Home/>)} />
          <Route path="/about" element={page(<About/>)} />
          <Route path="/experience" element={page(<Experience/>)} />
          <Route path="/education" element={page(<Education/>)} />
          <Route path="/projects" element={page(<Projects/>)} />
          <Route path="/skills" element={page(<Skills/>)} />
          <Route path="/contact" element={page(<Contact/>)} />
        </Routes>
      </AnimatePresence>

      <footer className="section">
        <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
          <p className="mute">© {new Date().getFullYear()} Bharathraaj Nagarajan</p>
          <div style={{display:'flex', gap:12}}>
            <a className="btn" href="https://github.com/BharathraajNagarajan" target="_blank"><Github size={18}/>GitHub</a>
            <a className="btn" href="https://www.linkedin.com/in/bharathraaj-nagarajan-898a66195" target="_blank"><Linkedin size={18}/>LinkedIn</a>
            <a className="btn" href="mailto:bharathraajnagarajan@gmail.com"><Mail size={18}/>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
