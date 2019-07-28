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
