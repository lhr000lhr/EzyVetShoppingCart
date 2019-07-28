import React from 'react'
import PropTypes from 'prop-types'

import { View, Button, StyleSheet } from 'react-native'
import { List, Stepper } from '@ant-design/react-native'

import { format2Dot } from '../utils'

const { Item } = List
const { Brief } = Item

const CartItem = props => {
  const { name, price, amount } = props
  return (
    <Item
      extra={
        <ControlArea
          onChange={value => {
            console.log('changed', value)
          }}
          amount={amount}
        />
      }
      multipleLine
    >
      {name}
      <Brief>{format2Dot(price)}</Brief>
    </Item>
  )
}

const ControlArea = props => {
  const { onChange, amount } = props
  return (
    <View style={styles.controlAreaStyle}>
      <Stepper key="0" max={10} min={1} defaultValue={amount} onChange={onChange} />
      <Button
        title="delete"
        color="red"
        onPress={() => {
          alert()
        }}
      />
    </View>
  )
}

CartItem.defaultProps = {
  amount: 1,
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number,
}

const styles = StyleSheet.create({
  controlAreaStyle: { width: 200, flexDirection: 'row' },
})

export default CartItem
