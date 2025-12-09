import '../styles/labels.css'
import { scalePoint } from '../utils/layoutScaling'

const ICONS = {
  sunny: '☀️',
  cloudy: '☁️',
  rainy: '🌧️',
  storm: '⛈️',
  fog: '🌫️'
}

export default function CityLabel({
  name,
  temp,
  iconCode = 'sunny',
  baseX,
  baseY,
  stageWidth = 1920,
  stageHeight = 1080
}) {
  const position = stageWidth && stageHeight
    ? scalePoint(baseX, baseY, stageWidth, stageHeight)
    : { x: baseX, y: baseY }

  const icon = ICONS[iconCode] ?? ICONS.sunny

  return (
    <div
      className="city-label"
      style={{ left: position.x, top: position.y }}
    >
      <span className="city-label__icon" aria-hidden="true">
        {icon}
      </span>
      <div className="city-label__text">
        <span className="city-label__name">{name}</span>
        <span className="city-label__temp">{temp}</span>
      </div>
    </div>
  )
}
