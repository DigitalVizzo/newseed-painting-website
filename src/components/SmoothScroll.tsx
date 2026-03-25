'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Handle anchor clicks for smooth scrolling
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"], button[data-scroll-to]')
      if (anchor) {
        const href = anchor.getAttribute('href') || anchor.getAttribute('data-scroll-to')
        if (href?.startsWith('#')) {
          e.preventDefault()
          const el = document.querySelector(href)
          if (el) lenis.scrollTo(el as HTMLElement, { offset: -80 })
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return <>{children}</>
}
