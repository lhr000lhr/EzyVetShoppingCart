import React from 'react'
import { AppRegistry } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import { registerModels } from './models'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['router'],
}

const persistEnhancer = () => createStore => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer)
  const persist = persistStore(store)
  return { ...store, persist }
}

const app = dva({
  initialState: {},
  models: [],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  extraEnhancers: [persistEnhancer()],
  onError(e) {
    console.log('onError', e)
  },
})
registerModels(app)

const App = app.start(<Router />)

AppRegistry.registerComponent('DvaStarter', () => App)
