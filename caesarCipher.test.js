import { caesarCipher } from './caesarCipher'

test('CaesarChiper test: only alphabet', () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3))
    .toBe('defghijklmnopqrstuvwxyzabc')
  expect(caesarCipher('AbcDefghijKlmnOpqRstuvwxyZ', 3))
    .toBe('DefGhijklmNopqRstUvwxyzabC')
})

test('CaesarChiper test: alphanumeric', () => {
  expect(caesarCipher('404meansNotFound', 9))
    .toBe('404vnjwbWxcOxdwm')
})

test('CaesarChiper test: alphanumeric with punctuation', () => {
  expect(caesarCipher('Hello, world!', 5))
    .toBe('Mjqqt, btwqi!')
  expect(caesarCipher('He said, "The score is 98!"', 5))
    .toBe('Mj xfni, "Ymj xhtwj nx 98!"')
})