import '../styles/maps.css'

export default function PlaceholderMap({ mapName, mapType }) {
  return (
    <div className="placeholder-map">
      <div className="placeholder-map__content">
        <p className="placeholder-map__label">Map Preview</p>
        <h2 className="placeholder-map__title">{mapName}</h2>
        <p className="placeholder-map__subtitle">{mapType}</p>
      </div>
    </div>
  )
}
