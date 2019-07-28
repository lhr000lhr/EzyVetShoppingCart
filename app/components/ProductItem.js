import React from 'react'
import PropTypes from 'prop-types'

import { View, Button } from 'react-native'
import { List } from '@ant-design/react-native'
import { format2Dot } from '../utils'

const { Item } = List
const { Brief } = Item

const ProductItem = props => {
  const { name, price } = props
  return (
    <Item extra={<ControlArea onPress={() => {}} />} multipleLine>
      {name}
      <Brief>{format2Dot(price)}</Brief>
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
