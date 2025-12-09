import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import mapsData from '../data/mapsConfig.json'
import citiesData from '../data/citiesConfig.json'
import MapStage from '../components/MapStage'
import PlaceholderMap from '../components/PlaceholderMap'
import CityLabel from '../components/CityLabel'
import { getMockTempForCity, getMockIconForCity } from '../utils/mockWeather'

export default function MapView() {
  const { mapId } = useParams()
  const map = useMemo(() => mapsData.find((entry) => entry.id === mapId), [mapId])

  const citiesForMap = useMemo(() => {
    if (!map) return []
    return citiesData
      .filter((city) => city.maps.includes(mapId))
      .map((city) => ({
        ...city,
        temp: getMockTempForCity(city.id),
        iconCode: getMockIconForCity(city.id)
      }))
  }, [map, mapId])

  if (!map) {
    return (
      <section className="map-view">
        <div className="page-header">
          <p className="eyebrow">Map not found</p>
          <h1>We could not resolve {mapId}</h1>
          <p className="page-copy">Please select a valid map from the catalog.</p>
          <Link to="/maps" className="ghost-button">Back to maps</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="map-view">
      <div className="page-header">
        <p className="eyebrow">{map.type} map</p>
        <h1>{map.name}</h1>
        <p className="page-copy">
          Placeholder map frame with city labels scaled using a 1920×1080 reference grid.
        </p>
      </div>
      <MapStage>
        {({ stageWidth, stageHeight }) => (
          <>
            <PlaceholderMap mapName={map.name} mapType={map.type} />
            {citiesForMap.map((city) => (
              <CityLabel
                key={city.id}
                name={city.name}
                temp={city.temp}
                iconCode={city.iconCode}
                baseX={city.x}
                baseY={city.y}
                stageWidth={stageWidth}
                stageHeight={stageHeight}
              />
            ))}
          </>
        )}
      </MapStage>
    </section>
  )
}
