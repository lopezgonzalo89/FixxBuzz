const { getText } = require('./index.js')

describe('Ejercicio 2', () => {
  it('getText', () => {
    const values = [3, 5, 15, 7]
    expect(getText(values)).toEqual(['Fizz', 'Buzz', 'FizzBuzz'])
  })
})
