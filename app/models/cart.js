export default {
  namespace: 'cart',
  state: {},
  reducers: {
    del(state, { payload }) {
      const { name } = payload
      const cart = { ...state }
      const product = cart[name]
      if (product && product.amount > 1) {
        product.amount -= 1
        cart[name] = product
      } else {
        delete cart[name]
      }

      return { ...cart }
    },
    add(state, { payload }) {
      const { name, price } = payload
      const cart = { ...state }
      let product = cart[name]
      if (product) {
        product.amount += 1
      } else {
        product = { price, name, amount: 1 }
      }
      cart[name] = product
      return { ...cart }
    },
  },
  effects: {},
  subscriptions: {},
}
