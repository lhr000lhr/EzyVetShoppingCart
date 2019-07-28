import { getProducts } from '../services/product'
import { createAction } from '../utils'

export default {
  namespace: 'product',
  state: {
    products: [],
    refreshing: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
    refreshingStart(state, { payload }) {
      return {
        ...state,
        ...payload,
        refreshing: true,
      }
    },
    refreshingEnd(state, { payload }) {
      return {
        ...state,
        ...payload,
        refreshing: false,
      }
    },
  },
  effects: {
    *query(_, { call, put }) {
      yield put(createAction('refreshingStart')({}))
      const data = yield call(getProducts)
      yield put({
        type: 'updateState',
        payload: {
          products: data,
        },
      })

      yield put(createAction('refreshingEnd')({}))
    },
  },
  subscriptions: {},
}
