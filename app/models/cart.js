import _ from 'lodash'

export default {
  namespace: 'cart',
  state: {},
  reducers: {
    del(state, { payload }) {
      const { name } = payload
      const cart = _.cloneDeep(state)
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
      const cart = _.cloneDeep(state)
      let product = cart[name]
      if (product) {
        product.amount += 1
      } else {
        product = { price, name, amount: 1 }
      }
      cart[name] = product
      return { ...cart }
    },
    setAmount(state, { payload }) {
      const { name, price, amount } = payload
      const cart = _.cloneDeep(state)
      let product = cart[name]
      if (product) {
        product.amount = amount
      } else {
        product = { price, name, amount }
      }
      cart[name] = product
      return { ...cart }
    },
    remove(state, { payload }) {
      const { name } = payload
      const cart = { ...state }
      delete cart[name]

      return { ...cart }
    },
  },
  effects: {},
  subscriptions: {},
}
