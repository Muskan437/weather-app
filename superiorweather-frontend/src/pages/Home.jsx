import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-page">
      <div className="page-header">
        <p className="eyebrow">Milestone 1</p>
        <h1>SuperiorWeather Livestream System</h1>
      </div>
      <p className="page-copy">
        This UI build is the Milestone 1 skeleton. Maps are placeholders and
        city labels are powered by mock weather data so we can validate layout
        before real PNGs or backend services arrive.
      </p>
      <Link to="/maps" className="primary-button">Go to Maps</Link>
    </section>
  )
}
