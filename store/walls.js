export const state = () => ({
  walls: []
})

export const mutations = {
  // Apartir de um numero, gerar um array de objetos de walls
  instanceWalls (state, quantity) {
    const template = { heightWall: 1, lengthWall: 1, numDoors: 0, numWindows: 0 }
    let arrayGenWalls = [...Array(quantity + 1).keys()]
    arrayGenWalls.pop()
    arrayGenWalls = arrayGenWalls.map(id => Object.assign({ idWall: id, ...template }))
    state.walls.push(arrayGenWalls)
  }
}
