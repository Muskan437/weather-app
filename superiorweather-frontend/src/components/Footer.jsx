export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="app-footer">
      <p>SuperiorWeather Livestream UI Framework · Milestone 1 · {year}</p>
    </footer>
  )
}
