import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  speed: number
  amplitude: number
  frequency: number
  offset: number
  length: number
  color: string
  width: number
  alpha: number
  dead: boolean
}

const COLORS = ['#FFD700', '#00FF99', '#FF3366']
const COLOR_WEIGHTS = [0.6, 0.25, 0.15]

function pickColor(): string {
  const r = Math.random()
  let cumulative = 0
  for (let i = 0; i < COLORS.length; i++) {
    cumulative += COLOR_WEIGHTS[i]
    if (r < cumulative) return COLORS[i]
  }
  return COLORS[0]
}

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

function createParticle(canvasWidth: number, canvasHeight: number): Particle {
  return {
    x: random(0, canvasWidth),
    y: canvasHeight + random(20, 100),
    speed: random(1.5, 4.0),
    amplitude: random(15, 50),
    frequency: random(0.005, 0.02),
    offset: random(0, Math.PI * 2),
    length: random(10, 40),
    color: pickColor(),
    width: random(1, 3),
    alpha: random(0.3, 1.0),
    dead: false,
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const poolRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    const PARTICLE_COUNT = isMobile ? 80 : 200
    const TRAIL_ALPHA = 0.08
    const SPAWN_PER_FRAME = 2
    const POOL_SIZE = 20

    // Init pool
    poolRef.current = Array.from({ length: POOL_SIZE }, () =>
      createParticle(window.innerWidth, window.innerHeight)
    )

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    function spawnParticle() {
      const pool = poolRef.current
      const p = pool[Math.floor(Math.random() * pool.length)]
      const newParticle: Particle = {
        ...p,
        x: random(0, canvas!.width),
        y: canvas!.height + random(20, 100),
        speed: random(1.5, 4.0),
        amplitude: random(15, 50),
        frequency: random(0.005, 0.02),
        offset: random(0, Math.PI * 2),
        length: random(10, 40),
        color: pickColor(),
        width: random(1, 3),
        alpha: random(0.3, 1.0),
        dead: false,
      }
      particlesRef.current.push(newParticle)
    }

    function animate() {
      if (!ctx || !canvas) return

      // Trail fade
      ctx.fillStyle = `rgba(11, 15, 25, ${TRAIL_ALPHA})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      const particles = particlesRef.current

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.y -= p.speed
        const currentX = p.x + Math.sin(p.y * p.frequency + p.offset) * p.amplitude

        if (p.y < -p.length) {
          p.dead = true
        }

        if (p.dead) {
          particles.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.strokeStyle = p.color
        ctx.lineWidth = p.width
        ctx.globalAlpha = p.alpha
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(currentX, p.y)
        ctx.lineTo(currentX, p.y + p.length)
        ctx.stroke()
        ctx.restore()
      }

      // Spawn new particles
      for (let i = 0; i < SPAWN_PER_FRAME; i++) {
        if (particles.length < PARTICLE_COUNT) {
          spawnParticle()
        }
      }

      animRef.current = requestAnimationFrame(animate)
    }

    // Initial fill
    ctx.fillStyle = '#0B0F19'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
