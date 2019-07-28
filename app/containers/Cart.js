import React, { Component } from 'react'
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'

import CartItem from '../components/CartItem'
import { createAction } from '../utils'

@connect(({ product, cart }) => ({
  ...product,
  cart,
}))
class Cart extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="shopping-cart" type="entypo" color={focused ? tintColor : 'gray'} />
    ),
  }

  componentDidMount() {}

  requestData = () => {
    this.props.dispatch(createAction('product/query')())
  }

  render() {
    const { products, refreshing } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.listStyle}
          contentContainerStyle={styles.containerStyle}
          data={products}
          keyExtractor={(item, i) => `${i}`}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.requestData} />}
          renderItem={({ item, index }) => <CartItem key={index} {...item} />}
        />
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
  containerStyle: {
    backgroundColor: 'red',
  },
})

export default Cart
