import React from 'react'
import PropTypes from 'prop-types'

import { View, Button, StyleSheet } from 'react-native'
import { List, Stepper } from '@ant-design/react-native'

import { format2Dot, createAction } from '../utils'

const { Item } = List
const { Brief } = Item

const CartItem = props => {
  const { name, price, amount, dispatch } = props
  return (
    <Item
      extra={
        <ControlArea
          onChange={value => {
            dispatch(createAction('cart/setAmount')({ name, amount: value }))
          }}
          onDelete={() => {
            dispatch(createAction('cart/remove')({ name }))
          }}
          amount={amount}
        />
      }
      multipleLine
    >
      {name}
      <Brief>Total:{format2Dot(price * amount)}</Brief>
    </Item>
  )
}

const ControlArea = props => {
  const { onChange, amount, onDelete } = props
  return (
    <View style={styles.controlAreaStyle}>
      <Stepper key="0" min={1} value={amount} onChange={onChange} />
      <Button title="delete" color="red" onPress={onDelete} />
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
