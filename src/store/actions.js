export default {
  addToCart(content, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = content.state.cart.find(item => item.iid === payload.iid && item.color === payload.color && item.size === payload.size)

      if(oldProduct) {
        resolve('数量+++')
        content.commit('addCount', payload)

      }else{
        resolve('商品数量 + 1')
        content.commit('addToCart', payload)

      }
    })
  }
}