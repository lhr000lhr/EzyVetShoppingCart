export default {
  namespace: 'cart',
  state: {},
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {},
  subscriptions: {},
}
