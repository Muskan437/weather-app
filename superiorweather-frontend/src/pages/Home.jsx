import { Link } from 'react-router-dom'

const stats = [
  { label: 'Maps ready', value: '50+' },
  { label: 'City labels', value: '25+' },
  { label: 'Aspect ratio', value: '16:9 / 1920×1080' },
  { label: 'Status', value: 'OBS live ready' }
]

export default function Home() {
  return (
    <section className="home-page">
      <div className="hero-panel">
        <div>
          <p className="eyebrow">Milestone 1</p>
          <h1>SuperiorWeather Livestream System</h1>
          <p className="page-copy hero-copy">
            Building the core UI frame for live weather streams. Placeholder
            maps and mock weather labels mimic the broadcast grain so we can
            confirm layouts before assets and back-end APIs arrive.
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

      <div className="home-focus">
        <div>
          <h2>Broadcast-grade canvas</h2>
          <p className="page-copy">
            Each map route corresponds to a dedicated OBS scene. The placeholder
            1920×1080 stage mirrors the final PNGs, so the stream layout remains
            pixel-perfect when the real graphics and data drop in later milestones.
          </p>
        </div>
        <div>
          <h2>City labels & mock data</h2>
          <p className="page-copy">
            Labels clamp to the base coordinate grid and adjust with the viewport
            so you can sketch how city overlays will behave once we plug in the
            backend weather + Twilio alert feeds.
          </p>
        </div>
      </div>
    </section>
  )
}
