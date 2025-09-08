import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ onChange }){
  const [light, setLight] = useState(false)

  useEffect(()=>{
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ?? (prefersDark ? 'dark' : 'light')
    setLight(initial === 'light')
  }, [])

  const toggle = ()=>{
    const nextLight = !light
    setLight(nextLight)
    onChange?.(nextLight ? 'light' : 'dark')
  }

  return (
    <button  style={{color:light ? "black" : "white"}} onClick={toggle} className="btn" aria-label="Toggle theme">
      {light ? <Moon size={18}/> : <Sun  color='white' size={18}/>}
      {light ? 'Dark' : 'Light'}
    </button>
  )
}
