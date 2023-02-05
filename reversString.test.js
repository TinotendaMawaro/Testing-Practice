import { reverseString } from './reverseString'

test('reverse consecutive numbers', () => expect(reverseString('123')).toBe('321'))
test('reverse consecutive alphabets', () => expect(reverseString('abc')).toBe('cba'))

test('reverse consecutive alphanumeric', () => {
  expect(reverseString('123abc')).toBe('cba321')
  expect(reverseString('aBc123')).toBe('321cBa')
})

test('nothing change if only one chars exist', () => {
  expect(reverseString('a')).toBe('a')
  expect(reverseString('1')).toBe('1')
})

test('reverse chars with punctuation, space, etc', () => {
  expect(reverseString('this is a test 123')).toBe('321 tset a si siht')
  expect(reverseString('this, is, a ,test. 123!')).toBe('!321 .tset, a ,si ,siht')
})

test('return null if parameter is empty/null', () => {
  expect(reverseString()).toBeNull()
  expect(reverseString(null)).toBeNull()
})