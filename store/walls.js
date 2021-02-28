export const state = () => ({
  currentWall: { idWall: 1.0, heightWall: 1.0, lengthWall: 1.0, numDoors: 0.0, numWindows: 0.0 },
  walls: [
    { idWall: 1.0, heightWall: 1.0, lengthWall: 1.0, numDoors: 0.0, numWindows: 0.0 },
    { idWall: 2, heightWall: 1.0, lengthWall: 1.0, numDoors: 0.0, numWindows: 0.0 },
    { idWall: 3, heightWall: 1.0, lengthWall: 1.0, numDoors: 0.0, numWindows: 0.0 },
    { idWall: 4, heightWall: 1.0, lengthWall: 1, numDoors: 0.0, numWindows: 0.0 }
  ]
})

export const mutations = {
  persistCurrentWallById (state, id) {
    const index = getters.getWallById(state, id)
    state.walls[index] = state.currentWall
  },
  changeCurrentWallById (state, id) {
    const index = getters.getWallById(state, id)
    state.currentWall = state.walls[index]
  },
  updateWallByProperty (state, { property, value }) {
    state.currentWall[property] = value
  }
}

export const getters = {
  getWallById (state, id) {
    return state.walls.findIndex(wall => wall.idWall === id)
  },
  wall (state) {
    return state.currentWall
  }
}
