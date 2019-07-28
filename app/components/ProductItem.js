import React from 'react'
import PropTypes from 'prop-types'

import { List } from '@ant-design/react-native'
import { format2Dot } from '../utils'

const { Item } = List
const { Brief } = Item

const ProductItem = props => {
  const { name, price } = props
  return (
    <Item extra="内容内容" multipleLine>
      {name}
      <Brief>{format2Dot(price)}</Brief>
    </Item>
  )
}

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductItem
