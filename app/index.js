import React from 'react'
import { AppRegistry, AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'

import dva from './utils/dva'
import Router, { routerMiddleware, routerReducer } from './router'
import appModel from './models/app'

const app = dva({
  initialState: {},
  models: [appModel],
  extraReducers: { router: routerReducer },
  onAction: [routerMiddleware],
  extraEnhancers: [autoRehydrate()],
  onError(e) {
    console.log('onError', e)
  }
})

const App = app.start(<Router />)
persistStore(app.getStore(), {
  storage: AsyncStorage,
  blacklist: ['router']
})

AppRegistry.registerComponent('DvaStarter', () => App)
