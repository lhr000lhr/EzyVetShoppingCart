export default {
  namespace: 'product',
  state: {},
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {},
  subscriptions: {},
}
