import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import '../styles/layout.css'

export default function MainLayout({ children }) {
  return (
    <div className="layout-shell">
      <TopBar />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  )
}
