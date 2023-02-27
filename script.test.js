const stringLength = require('./script.js');

const word = 'hello'

test('Return string ', () => {
    expect(stringLength(word)).toBe(word.length)
});