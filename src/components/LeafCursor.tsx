'use client'

import { useEffect, useState } from 'react'

export default function LeafCursor() {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX - 12, y: e.clientY - 16 })
      if (!visible) setVisible(true)
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [visible])

  return (
    <>
      <style>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
        @media (pointer: coarse) {
          .leaf-cursor { display: none !important; }
        }
      `}</style>
      <div
        className="leaf-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          transform: `translate(${pos.x}px, ${pos.y}px) rotate(-90deg)`,
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
        }}
      >
        <svg width="24" height="32" viewBox="0 0 300 440" fill="none" style={{ filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.6))' }}>
          <path
            d="M6.61922 406.561C6.15292 407.384 4.57637 409.743 4.37653 408.819C0.801541 392.92 0.446263 374.173 0.11319 358.364C-0.242088 341.008 0.090985 324.052 3.28849 307.207C27.9692 177.414 153.072 68.9713 296.915 78.5951C298.047 78.6729 297.703 81.4099 297.859 83.635C298.447 92.2909 297.259 111.728 293.151 137.45C290.22 155.763 287.866 177.403 280.994 199.577C276.109 215.353 270.746 231.719 263.552 247.796C244.167 291.131 215.045 332.296 176.753 360.478C138.461 388.659 98.5919 406.027 24.9716 427.533C24.1278 427.777 22.1182 428.412 22.4624 427.599C50.2185 362.569 100.757 288.394 142.502 231.764C142.558 231.697 142.569 231.608 142.591 231.53C143.379 228.626 171.146 197.841 176.209 187.672C176.72 186.66 175.443 185.681 174.588 186.426C108.318 244.414 49.8188 330.193 6.61922 406.561Z"
            fill="#1A1A1A"
            stroke="white"
            strokeWidth="12"
          />
        </svg>
      </div>
    </>
  )
}
