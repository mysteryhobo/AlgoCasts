// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution 1
// function anagrams(stringA, stringB) {
//   if (stringA.length !== stringB.length) return false
//   const charMap = {}
//   for (let currChar of stringA.toLowerCase()) {
//     charMap[currChar] = charMap[currChar] ? ++charMap[currChar] : 1
//   }

//   for (let currChar of stringB.toLowerCase()) {
//     if (!charMap[currChar] || charMap[currChar] === 0) return false
//     charMap[currChar]--
//   }
//   return true
// }

//solution 2
// function anagrams(stringA, stringB) {
//   // if (stringA.length !== stringB.length) return false

//   const mapA = createMap(stringA)
//   const mapB = createMap(stringB)
//   console.log(mapA)
//   console.log(mapB)
//   if (Object.keys(mapA).length !== Object.keys(mapB).length) return false
//   for(let currKey in mapA) {
//     if (mapA[currKey] !== mapB[currKey]) return false
//   }
//   return true
// }

// function createMap(str) {
//   const charMap = {}
//   for (let currChar of str.replace(/[\W]/g, '').toLowerCase()) {
//     charMap[currChar] = charMap[currChar] ? charMap[currChar] + 1 : 1
//   }
//   return charMap
// }

//solution 3
function anagrams(stringA, stringB) {
  return formatString(stringA) === formatString(stringB)
}

function formatString(str) {
  return str
    .replace(/[\W]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = anagrams;
