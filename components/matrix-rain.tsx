'use client'

import { useEffect, useRef } from 'react'

const CHARACTERS = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/[]{}$#'
const COLUMN_WIDTH = 18
const TARGET_FPS = 24

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d', { alpha: true })
    if (!context) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let frame = 0
    let drops: number[] = []
    let lastPaint = 0
    let running = false

    const resize = () => {
      // Cap the device pixel ratio. On a 3x phone the uncapped version
      // pushes ~9x the pixels for no visible gain.
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const { innerWidth: width, innerHeight: height } = window

      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)

      const columns = Math.ceil(width / COLUMN_WIDTH)
      drops = Array.from({ length: columns }, () => Math.random() * -40)
    }

    const paintStaticFrame = () => {
      const { innerWidth: width, innerHeight: height } = window
      context.clearRect(0, 0, width, height)
      context.font = '12px monospace'
      context.fillStyle = 'rgba(72, 163, 107, 0.18)'
      drops.forEach((_, index) => {
        const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
        context.fillText(character, index * COLUMN_WIDTH, Math.random() * height)
      })
    }

    const draw = (now: number) => {
      frame = window.requestAnimationFrame(draw)

      // Throttle. A 144Hz monitor does not need 144 frames of this.
      if (now - lastPaint < 1000 / TARGET_FPS) return
      lastPaint = now

      const { innerWidth: width, innerHeight: height } = window
      context.fillStyle = 'rgba(3, 7, 5, 0.13)'
      context.fillRect(0, 0, width, height)
      context.font = '12px monospace'

      for (let index = 0; index < drops.length; index += 1) {
        const drop = drops[index]
        const character = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
        const y = drop * COLUMN_WIDTH

        context.fillStyle =
          Math.random() > 0.94 ? 'rgba(174, 255, 201, 0.72)' : 'rgba(72, 163, 107, 0.25)'
        context.fillText(character, index * COLUMN_WIDTH, y)

        drops[index] = y > height && Math.random() > 0.975 ? -10 : drop + 0.55
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

    const onVisibilityChange = () => {
      // Backgrounded tabs should not burn battery on a decorative canvas.
      if (document.hidden) stop()
      else start()
    }

    const onMotionChange = () => {
      stop()
      if (motionQuery.matches) paintStaticFrame()
      else start()
    }

    resize()

    if (motionQuery.matches) {
      paintStaticFrame()
    } else {
      start()
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibilityChange)
    motionQuery.addEventListener('change', onMotionChange)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      motionQuery.removeEventListener('change', onMotionChange)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />
}
