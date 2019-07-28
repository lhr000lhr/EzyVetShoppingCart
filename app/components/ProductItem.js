import React from 'react'
import PropTypes from 'prop-types'

import { View, Button } from 'react-native'
import { List } from '@ant-design/react-native'
import Toast from 'react-native-root-toast'

import { format2Dot, createAction } from '../utils'

const { Item } = List
const { Brief } = Item

const ProductItem = props => {
  const { dispatch, name, price } = props

  return (
    <Item
      extra={
        <ControlArea
          onPress={() => {
            dispatch(createAction('cart/add')({ name, price }))
            Toast.show(`Add ${name}`, {
              duration: Toast.durations.SHORT,
              position: Toast.positions.BOTTOM,
            })
          }}
        />
      }
      multipleLine
    >
      {name}
      <Brief>Price:{format2Dot(price)}</Brief>
    </Item>
  )
}

const ControlArea = props => {
  const { onPress } = props
  return (
    <View style={{}}>
      <Button onPress={onPress} title="add" />
    </View>
  )
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductItem
