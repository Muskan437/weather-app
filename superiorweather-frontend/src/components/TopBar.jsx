import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <header className="top-bar">
      <div className="top-bar__title">SuperiorWeather Livestream (Frontend Skeleton)</div>
      <nav className="top-bar__nav">
        <Link to="/">Home</Link>
        <Link to="/maps">Maps</Link>
      </nav>
    </header>
  )
}
