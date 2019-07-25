import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Text } from 'react-native-elements'

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Cart extends Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="shopping-cart" type="entypo" color={focused ? tintColor : 'gray'} />
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is cart view. </Text>
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
})

export default Cart
