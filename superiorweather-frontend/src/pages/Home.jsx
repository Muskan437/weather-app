import { Link } from 'react-router-dom'
import mapsData from '../data/mapsConfig.json'

const stats = [
  { label: 'Maps ready', value: '50+' },
  { label: 'City labels', value: '25+' },
  { label: 'Aspect ratio', value: '16:9 / 1920×1080' },
  { label: 'Status', value: 'OBS live ready' }
]

const categories = [
  {
    key: 'national',
    title: 'National Coverage',
    description: 'Main stage maps that cover the entire country.'
  },
  {
    key: 'regional',
    title: 'Regional Focus',
    description: 'Focused states/regions for more intimate storytelling.'
  },
  {
    key: 'local',
    title: 'Local Forecasts',
    description: 'City and metro only canvases for hyper-local streaming.'
  }
]

function getMapsForType(type) {
  return mapsData.filter((map) => map.type === type)
}

export default function Home() {
  const tvImage = '/images/tv.png'

  return (
    <section className="home-page">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Milestone 1</p>
          <h1>SuperiorWeather Livestream System</h1>
          <p className="page-copy hero-copy">
            Building the broadcast-grade dashboard that will later drive OBS
            streams. Placeholder maps, mock labels, and pre-wired routes keep
            the layout faithful while we await the real assets.
          </p>
          <Link to="/maps" className="primary-button hero-button">
            Open the map catalog
          </Link>
        </div>
        <div className="hero-panel__badge">
          <p>Live stream ready</p>
          <span>Preview mode</span>
        </div>
      </div>

      <div className="hero-stats">
        {stats.map((stat) => (
          <article key={stat.label} className="hero-stats__item">
            <p className="hero-stats__value">{stat.value}</p>
            <span className="hero-stats__label">{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="dashboard-wrapper">
        <div className="dashboard-grid">
          <aside className="dashboard-column">
            <div className="dashboard-column__logo">
              <span>⚡</span>
              <div>
                <p>SuperiorWeather</p>
                <small>Live alert frame</small>
              </div>
            </div>
            <div className="dashboard-column__slot">
              <span>Now streaming</span>
              <strong>Team Coverage · Winter Storm</strong>
              <p>Switching between the national + local grids.</p>
            </div>
            <div className="dashboard-column__slot dashboard-column__slot--muted">
              <span>Fallback content</span>
              <div className="dashboard-placeholder" aria-hidden="true" />
            </div>
          </aside>

          <div className="dashboard-main">
            <div className="dashboard-tv-shell">
              <div className="dashboard-tv">
                <img src={tvImage} alt="Studio coverage timeline" />
                <div className="dashboard-tv__badge">Team Coverage</div>
              </div>
              <div className="dashboard-tv__grid">
                <span>National</span>
                <span>Now · 55°F</span>
                <span>Forecast · 53°F Low</span>
                <span>Alerts live</span>
              </div>
            </div>

            <div className="dashboard-categories">
              {categories.map((category) => {
                const list = getMapsForType(category.key).slice(0, 3)
                return (
                  <article key={category.key} className="dashboard-category-card">
                    <div>
                      <p className="eyebrow">{category.title}</p>
                      <h3>{category.description}</h3>
                    </div>
                    <ul>
                      {list.map((map) => (
                        <li key={map.id}>
                          <Link to={`/maps/${map.id}`}>{map.name}</Link>
                        </li>
                      ))}
                    </ul>
                    <Link to="/maps" className="ghost-button">
                      View all {category.key} maps
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
