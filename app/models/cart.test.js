import { expect } from 'chai'

import cart from './cart'

describe('Model Cart', () => {
  const state = {
    Hacksaw: {
      price: 18.45,
      name: 'Hacksaw',
      amount: 1,
    },

    Chisel: {
      name: 'Chisel',
      price: 12.9,
      amount: 10,
    },
  }

  it('add should work', () => {
    const { add } = cart.reducers
    const payload = {
      name: 'Sledgehammer',
      price: 125.75,
    }
    const resultStage = add(state, { payload })
    expect(resultStage).to.deep.equal({
      Hacksaw: {
        price: 18.45,
        name: 'Hacksaw',
        amount: 1,
      },
      Sledgehammer: {
        name: 'Sledgehammer',
        price: 125.75,
        amount: 1,
      },

      Chisel: {
        name: 'Chisel',
        price: 12.9,
        amount: 10,
      },
    })
  })

  it('delete should work', () => {
    const { del } = cart.reducers
    let resultStage = del(state, { payload: { name: 'Hacksaw' } })
    expect(resultStage).to.deep.equal({
      Chisel: {
        name: 'Chisel',
        price: 12.9,
        amount: 10,
      },
    })

    resultStage = del(state, { payload: { name: 'Sledgehammer' } })
    expect(resultStage).to.deep.equal({ ...state })

    resultStage = del(state, { payload: { name: 'Chisel' } })

    expect(resultStage).to.deep.equal({
      Hacksaw: {
        price: 18.45,
        name: 'Hacksaw',
        amount: 1,
      },

      Chisel: {
        name: 'Chisel',
        price: 12.9,
        amount: 9,
      },
    })
  })
})
