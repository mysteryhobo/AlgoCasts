// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//solution 1
// function palindrome(str) {
//   return Array.from(str).reverse().join('') === str
// }

//solution2
function palindrome(str) {
  let checkIndex = str.length - 1
  return Array.from(str).every((currChar) => currChar === str[checkIndex--])
}

module.exports = palindrome;
