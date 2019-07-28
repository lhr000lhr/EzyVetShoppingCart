import { format2Dot } from './index'

describe('format2Dot tests', () => {
  it('should add zero for int numbers and return them as string', () => {
    expect(format2Dot(0)).toEqual('0.00')
    expect(format2Dot(1)).toEqual('1.00')
    expect(format2Dot(2)).toEqual('2.00')
    expect(format2Dot(3)).toEqual('3.00')
    expect(format2Dot(4)).toEqual('4.00')
    expect(format2Dot(5)).toEqual('5.00')
    expect(format2Dot(6)).toEqual('6.00')
    expect(format2Dot(7)).toEqual('7.00')
    expect(format2Dot(8)).toEqual('8.00')
    expect(format2Dot(9)).toEqual('9.00')
  })

  it('should add zero for float numbers and return them as string', () => {
    expect(format2Dot(1.1)).toEqual('1.10')
    expect(format2Dot(2.2)).toEqual('2.20')
  })

  it('should add remain 2 decimal places for float numbers and return them as string', () => {
    expect(format2Dot(1.11111)).toEqual('1.11')
    expect(format2Dot(2.2123123123)).toEqual('2.21')
    expect(format2Dot(2.00000222)).toEqual('2.00')
  })

  it('should return 0.00 when not number and return them as string', () => {
    expect(format2Dot('aaa')).toEqual('0.00')
    expect(format2Dot('$@#@#')).toEqual('0.00')
    expect(format2Dot('$@#@#123')).toEqual('0.00')
  })
})
