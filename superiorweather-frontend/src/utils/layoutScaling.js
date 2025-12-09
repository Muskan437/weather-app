export function getScaleFactors(
  stageWidth,
  stageHeight,
  baseWidth = 1920,
  baseHeight = 1080
) {
  const scaleX = stageWidth / baseWidth
  const scaleY = stageHeight / baseHeight
  return { scaleX, scaleY }
}

export function scalePoint(
  x,
  y,
  stageWidth,
  stageHeight,
  baseWidth = 1920,
  baseHeight = 1080
) {
  const { scaleX, scaleY } = getScaleFactors(stageWidth, stageHeight, baseWidth, baseHeight)
  return {
    x: x * scaleX,
    y: y * scaleY
  }
}
