const getText = (values) => values
  .map((value) => `${value % 3 ? '' : 'Fizz'}${value % 5 ? '' : 'Buzz'}`)
  .filter((text) => text !== '')

module.exports.getText = getText
