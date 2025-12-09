import { useEffect, useRef, useState } from 'react'
import '../styles/maps.css'

export default function MapStage({ children }) {
  const stageRef = useRef(null)
  const [stageSize, setStageSize] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    if (!stageRef.current) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const { width, height } = entry.contentRect
      setStageSize({
        width: Math.max(width, 1),
        height: Math.max(height, 1)
      })
    })

    observer.observe(stageRef.current)
    return () => observer.disconnect()
  }, [])

  const childrenWithStage = typeof children === 'function'
    ? children(stageSize)
    : children

  return (
    <div className="map-stage">
      <div className="map-stage__inner">
        <div className="map-stage__content" ref={stageRef}>
          {childrenWithStage}
        </div>
      </div>
    </div>
  )
}
