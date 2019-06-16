
let mutations = { 
    changeCity(state, city) {
      state.city = city
      localStorage.setItem('city', city)
    }
}
export default mutations