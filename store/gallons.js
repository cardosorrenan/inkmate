export const state = () => ({
  gallons: {}
})

export const mutations = {
  setGallons (state, result) {
    state.gallons = result
  }
}

export const actions = {
  async fetchGallons ({ commit }, { myRoomArea }) {
    const result = await this.$axios.$get('/get_gallons', {
      params: {
        area: myRoomArea
      }
    })
    commit('setGallons', result)
  }
}

export const getters = {
  getFetchedGallons (state) {
    return state.gallons
  }
}
