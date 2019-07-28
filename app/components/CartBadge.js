import React from 'react'
import _ from 'lodash'
import { Badge } from '@ant-design/react-native'
import { connect } from 'react-redux'

@connect(({ cart }) => ({ cart }))
class CartBadge extends React.PureComponent {
  render() {
    const { cart, children } = this.props
    const products = _.map(cart, value => value)
    const count = products.length
    return <Badge text={count}>{children}</Badge>
  }
}

export default CartBadge
