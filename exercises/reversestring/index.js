// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1
// function reverse(str) {
//   return Array.from(str).reverse().join('')
// }

//solution 2
function reverse(str) {
  return Array.from(str).reduce((reversedString, currChar) => currChar + reversedString, '')
}


module.exports = reverse;
