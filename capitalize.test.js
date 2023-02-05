import { capitalize } from './capitalize'

test('Capitalize alphabet string', () => {
  expect(capitalize('a'))
    .toMatch(/^[A-Z]/)
  expect(capitalize('aaa'))
    .toMatch(/^[A-Z]/)
  expect(capitalize('any string'))
    .toMatch(/^[A-Z]/)
})

test('Capitalize alphabet with punctuation', () => {
  expect(capitalize('string, with; punctuation.'))
    .toMatch(/^[A-Z]/)
})

test('Capitalize first char if string start with not an alphabet', () => {
  expect(capitalize('1aaa'))
    .toMatch(/[A-Z]/)
  expect(capitalize('1123s213'))
    .toMatch(/[A-Z]/)
})

test('parameter does not contain alphabet char', () => {
  expect(capitalize(1123213))
    .not.toMatch(/[A-Z]/)
  expect(capitalize(',.;'))
    .not.toMatch(/[A-Z]/)
})

test('parameter undefined', () => {
  expect(capitalize())
    .toBeUndefined()
})

test('parameter null', () => {
  expect(capitalize(null))
    .not.toMatch(/[A-Z]/)
})