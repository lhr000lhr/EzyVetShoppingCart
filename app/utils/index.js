import _ from 'lodash'

export { NavigationActions, StackActions } from 'react-navigation'

export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

export const format2Dot = number => {
  const floatNumber = parseFloat(number)
  if (_.isNaN(floatNumber)) {
    return '0.00'
  }

  return `${floatNumber.toFixed(2)}`
}

export const totalPrice = products => {
  const price = _.reduce(
    products,
    (sum, product) => sum + (product?.price ?? 0) * (product?.amount ?? 0),
    0
  )

  const floatNumber = parseFloat(price)
  if (_.isNaN(floatNumber)) {
    return '0.00'
  }

  return `${floatNumber.toFixed(2)}`
}
