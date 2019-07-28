import { getProducts } from '../services/product'

export default {
  namespace: 'product',
  state: {
    data: 1,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {
    *query(_, { call, put }) {
      const data = yield call(getProducts)

      yield put({
        type: 'updateState',
        payload: data,
      })
    },
  },
  subscriptions: {},
}
