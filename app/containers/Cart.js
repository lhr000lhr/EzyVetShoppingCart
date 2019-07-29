import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Text } from 'react-native-elements'
import _ from 'lodash'

import CartItem from '../components/CartItem'
import CartBadge from '../components/CartBadge'
import { totalPrice } from '../utils'

@connect(({ cart }) => ({ cart }))
class Cart extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused, tintColor }) => (
      <CartBadge>
        <Icon name="shopping-cart" type="entypo" color={focused ? tintColor : 'gray'} />
      </CartBadge>
    ),
  }

  componentDidMount() {}

  render() {
    const { cart, dispatch } = this.props
    const products = _.map(cart, value => value)

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listStyle}
          contentContainerStyle={styles.containerStyle}
          data={products}
          keyExtractor={(item, i) => `${i}`}
          renderItem={({ item, index }) => <CartItem key={index} {...item} dispatch={dispatch} />}
        />

        <View>
          <Text>Total Price :{totalPrice(products)}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  listStyle: {
    width: '100%',
  },
  containerStyle: {},
})

export default Cart
