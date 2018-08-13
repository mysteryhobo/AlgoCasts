// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let capitalizedString = []
  for(let currWord of str.split(' ')) {
    capitalizedString.push(currWord[0].toUpperCase() + currWord.substring(1))
  }
  console.log(capitalizedString)
  return capitalizedString.join(' ')
}

function capitalize(str) {
  let capitalizedString = ''
  for (let i = 0; i < str.length; i ++) {
    if (str[i - 1] === ' ') capitalizedString += str[i].toUpperCase()
    else capitalizedString += str[i]
  }
  console.log(capitalizedString)
  return capitalizedString[0].toUpperCase() + capitalizedString.substr(1)
}

module.exports = capitalize;
