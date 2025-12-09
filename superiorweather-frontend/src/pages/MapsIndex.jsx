import { Link } from 'react-router-dom'
import mapsData from '../data/mapsConfig.json'

export default function MapsIndex() {
  return (
    <section className="maps-index">
      <div className="page-header">
        <p className="eyebrow">Map Catalog</p>
        <h1>All configured maps</h1>
        <p className="page-copy">
          Every map route is provisioned so OBS playlists can latch onto the right
          canvas once designs land. Click Open to preview the placeholder version.
        </p>
      </div>
      <div className="maps-grid">
        {mapsData.map((mapItem) => (
          <article key={mapItem.id} className="map-card">
            <div>
              <h3>{mapItem.name}</h3>
              <p className="map-card__type">{mapItem.type}</p>
            </div>
            <Link to={`/maps/${mapItem.id}`} className="ghost-button">
              Open
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
