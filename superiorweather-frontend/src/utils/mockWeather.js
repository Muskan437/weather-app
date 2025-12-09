const baseTemps = {
  nyc: 68,
  bos: 63,
  phl: 65,
  mia: 78,
  chi: 57,
  den: 52,
  atl: 70,
  la: 75
}

const iconOrder = ['sunny', 'cloudy', 'rainy', 'storm', 'fog']

function pseudoSeed(value = '') {
  return value.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
}

export function getMockTempForCity(cityId) {
  const base = baseTemps[cityId] ?? 69
  const offset = (pseudoSeed(cityId) % 7) - 3
  return `${base + offset}°F`
}

export function getMockIconForCity(cityId) {
  const seed = pseudoSeed(cityId)
  return iconOrder[seed % iconOrder.length]
}
