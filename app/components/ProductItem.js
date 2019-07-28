import React from 'react'
import PropTypes from 'prop-types'

import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'

const ProductItem = props => {
  const { name, price } = props
  return (
    <View style={styles.containerStyle}>
      <Text>{name}</Text>
      <Text>{price}</Text>
    </View>
  )
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 40,
    backgroundColor: 'white',
  },
})

export default ProductItem
