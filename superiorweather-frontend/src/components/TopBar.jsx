import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <header className="top-bar">
      <div>
        <div className="top-bar__title">SuperiorWeather Livestream</div>
        <p className="top-bar__subtitle">Broadcast-ready map previews for OBS streaming</p>
      </div>
      <div className="top-bar__actions">
        <span className="top-bar__status">OBS Ready</span>
        <nav className="top-bar__nav">
          <Link to="/">Home</Link>
          <Link to="/maps">Maps</Link>
        </nav>
      </div>
    </header>
  )
}
