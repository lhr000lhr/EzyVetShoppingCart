import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Text } from 'react-native-elements'

const ProductItem = props => {
  const { name, price } = props
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  )
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductItem
