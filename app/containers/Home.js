import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList, RefreshControl } from 'react-native'
import { connect } from 'react-redux'

import ProductItem from '../components/ProductItem'
import { createAction } from '../utils'

@connect(({ product }) => ({
  ...product,
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
    this.requestData()
  }

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
  listStyle: {
    width: '100%',
  },
  containerStyle: {
    backgroundColor: 'red',
  },
})

export default Home
