import { expect } from 'chai'
import { effects } from 'dva-core/saga'
import product from './product'
import { getProducts } from '../services/product'

describe('Model Product', () => {
  it('query should work', () => {
    const { call, put } = effects
    const { query } = product.effects
    const generator = query({}, { call, put })
    generator.next()
    let next = generator.next()

    expect(next.value).to.deep.equal(call(getProducts))
    const data = { success: true }
    next = generator.next(data)
    expect(next.value).to.deep.equal(
      put({
        type: 'updateState',
        payload: {
          products: data,
        },
      })
    )
  })
})
