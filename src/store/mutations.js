export default {
  changeHomeCurrentIndex(state, payload) {
    state.homeCurrentIndex = payload
  },
  changeDetailCurrentIndex(state, payload) {
    state.detailCurrentIndex = payload
  },
  addToCart(state, payload) {
    state.cart.push(payload)
  },
  addCount(state, payload) {
    let oldProduct = state.cart.find(item => item.iid === payload.iid && item.color === payload.color && item.size === payload.size)
    oldProduct.count = payload.count + oldProduct.count
  },
  toCheckedAll(state, payload) {
    for(let item of state.cart) {
      item.isChecked = true
    }
  },
  notCheckedAll(state, payload) {
    for(let item of state.cart) {
      item.isChecked = false
    }
  },
  deleteChecked(state, payload) {
    while(true) {
      let index = -1
      index = state.cart.findIndex(item => item.isChecked === true)
      if(index === -1) {
        break
      }
      state.cart.splice(index, 1)
    }
  }
}