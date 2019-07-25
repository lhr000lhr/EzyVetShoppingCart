import appModel from './app'
import product from './product'
import cart from './cart'

export const registerModels = app => {
  app.model(appModel)
  app.model(product)
  app.model(cart)
}
