const pigLatin = require('./index-START')

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function')
})

test('"pig" is an pigLatin of "igpay"', () => {
  expect(pigLatin('pig', 'igpay')).toBeTruthy()
})

test('"glove" is an pigLatin of "oveglay"', () => {
  expect(pigLatin('glove', 'oveglay')).toBeTruthy()
})