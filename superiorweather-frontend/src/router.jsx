import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import MapsIndex from './pages/MapsIndex'
import MapView from './pages/MapView'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/maps" element={<MapsIndex />} />
      <Route path="/maps/:mapId" element={<MapView />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
