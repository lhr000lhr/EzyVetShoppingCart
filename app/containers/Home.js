import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { ProductItem } from '../components'
import { NavigationActions, createAction } from '../utils'

@connect(({ product }) => ({
  product,
}))
class Home extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
  }

  componentDidMount() {
    this.props.dispatch(createAction('product/query')())
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }

  render() {
    const { product } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={product?.products}
          keyExtractor={(item, i) => `${i}`}
          renderItem={({ item, index }) => <ProductItem key={index} {...item} />}
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
})

export default Home
