'use client'

import { useEffect, useRef } from 'react'

const CHARACTERS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/[]{}$#'
const COLUMN_WIDTH = 22
const TARGET_FPS = 18
const SPEED = 0.32

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let frame = 0
    let drops: number[] = []
    let lastPaint = 0
    let running = false

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const { innerWidth: width, innerHeight: height } = window

      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      drops = Array.from({ length: Math.ceil(width / COLUMN_WIDTH) }, () => Math.random() * -50)
    }

    const paintStatic = () => {
      const { innerWidth: width, innerHeight: height } = window
      context.clearRect(0, 0, width, height)
      context.font = '13px monospace'
      context.fillStyle = 'rgba(79, 157, 115, 0.2)'
      drops.forEach((_, index) => {
        context.fillText(
          CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
          index * COLUMN_WIDTH,
          Math.random() * height,
        )
      })
    }

    const draw = (now: number) => {
      frame = window.requestAnimationFrame(draw)

      if (now - lastPaint < 1000 / TARGET_FPS) return
      lastPaint = now

      const { innerWidth: width, innerHeight: height } = window

      context.fillStyle = 'rgba(8, 12, 10, 0.1)'
      context.fillRect(0, 0, width, height)
      context.font = '13px monospace'

      for (let index = 0; index < drops.length; index += 1) {
        const drop = drops[index]
        const y = drop * COLUMN_WIDTH

        context.fillStyle =
          Math.random() > 0.97 ? 'rgba(126, 226, 168, 0.5)' : 'rgba(79, 157, 115, 0.22)'
        context.fillText(
          CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
          index * COLUMN_WIDTH,
          y,
        )

        drops[index] = y > height && Math.random() > 0.98 ? -10 : drop + SPEED
      }
    }

    const start = () => {
      if (running || motionQuery.matches || document.hidden) return
      running = true
      lastPaint = 0
      frame = window.requestAnimationFrame(draw)
    }

    const stop = () => {
      running = false
      window.cancelAnimationFrame(frame)
    }

    const onVisibility = () => (document.hidden ? stop() : start())

    const onMotion = () => {
      stop()
      if (motionQuery.matches) paintStatic()
      else start()
    }

    resize()
    if (motionQuery.matches) paintStatic()
    else start()

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    motionQuery.addEventListener('change', onMotion)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      motionQuery.removeEventListener('change', onMotion)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />
}
