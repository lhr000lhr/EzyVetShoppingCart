import React, { Component } from 'react'
import { StyleSheet, View, Image, FlatList, RefreshControl } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { ProductItem } from '../components'
import { NavigationActions, createAction } from '../utils'

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
    this.props.dispatch(createAction('product/query')())
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
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
