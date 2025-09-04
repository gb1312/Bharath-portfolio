import { useEffect, useRef } from 'react'

export default function Sparkles(){
  const ref = useRef(null)

  useEffect(()=>{
    const c = document.createElement('canvas')
    c.style.position = 'fixed'
    c.style.inset = '0'
    c.style.zIndex = '-1'
    c.style.pointerEvents = 'none'
    ref.current = c
    document.body.appendChild(c)

    const ctx = c.getContext('2d')
    let w=0,h=0, raf

    const particles = Array.from({length: 80}, ()=> ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random()*0.7+0.3,
      vx: (Math.random()-.5)*0.0007,
      vy: (Math.random()-.5)*0.0007
    }))

    const resize = ()=>{ w = c.width = innerWidth * devicePixelRatio; h = c.height = innerHeight * devicePixelRatio }
    resize()
    addEventListener('resize', resize)

    const draw = ()=>{
      ctx.clearRect(0,0,w,h)
      particles.forEach(p=>{
        p.x += p.vx; p.y += p.vy
        if(p.x<0||p.x>1) p.vx*=-1
        if(p.y<0||p.y>1) p.vy*=-1
        const X = p.x * w, Y = p.y * h
        const r = 1.2 + p.z*2.4
        ctx.beginPath()
        ctx.arc(X, Y, r, 0, Math.PI*2)
        ctx.fillStyle = `rgba(124,58,237,${0.35*p.z})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return ()=>{
      cancelAnimationFrame(raf)
      removeEventListener('resize', resize)
      document.body.removeChild(c)
    }
  }, [])

  return null
}
