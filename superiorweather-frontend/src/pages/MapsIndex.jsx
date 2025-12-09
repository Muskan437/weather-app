import { Link } from 'react-router-dom'
import mapsData from '../data/mapsConfig.json'

export default function MapsIndex() {
  return (
    <section className="maps-index">
      <div className="page-header">
        <p className="eyebrow">Map Catalog</p>
        <h1>Every scene already routes to a 16×9 canvas</h1>
        <p className="page-copy">
          These placeholder frames are OBS-ready and include map metadata so we can
          pre-build streaming playlists ahead of the official PNG designs.
        </p>
      </div>
      <div className="maps-grid">
        {mapsData.map((mapItem) => (
          <article key={mapItem.id} className="map-card">
            <div>
              <h3>{mapItem.name}</h3>
              <p className="map-card__type">{mapItem.type}</p>
            </div>
            <div className="map-card__meta">
              <span>ID: {mapItem.id}</span>
              <span>Type: {mapItem.type}</span>
            </div>
            <Link to={`/maps/${mapItem.id}`} className="ghost-button">
              Open preview
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
