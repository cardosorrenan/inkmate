export default {
  areaByWall: ({ lengthWall, heightWall, numDoors, numWindows }) => {
    const wallArea = lengthWall * heightWall
    const doorArea = numDoors * 0.8 * 1.9
    const windowArea = numWindows * 1.2 * 2.0
    const finalAreaWall = (wallArea - (doorArea + windowArea)).toFixed(2)
    return finalAreaWall
  }
}
