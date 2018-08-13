// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const dict = {}
  for (let currChar of str) {
    dict[currChar] = dict[currChar] ? dict[currChar] + 1 : 1
  }

  let maxKey = ''
  let max = 0

  for (let currKey in dict) {
    if (dict[currKey] > max) {
      maxKey = currKey
      max = dict[currKey]
    }
  }
  return maxKey
}

module.exports = maxChar;
