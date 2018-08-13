// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let lineIndex = 1; lineIndex <= n; lineIndex ++) {
//     let outputString = ''
//     for (let charIndex = 1; charIndex <= n; charIndex ++) {
//       if (charIndex <= lineIndex) outputString += '#'
//       else outputString += ' '
//     }
//     console.log(outputString)
//   }
// }

function steps(n, currString = '', lineIndex = 1, charIndex = 1) {
  // console.log(n, currString, lineIndex, charIndex)
  if (lineIndex > n) return
  else if(charIndex > n) {
    console.log(currString)
    steps(n, '', lineIndex + 1)
  } else if (charIndex <= lineIndex) steps(n, currString += '#', lineIndex, charIndex + 1)
  else steps(n, currString += ' ', lineIndex, charIndex + 1)
}

module.exports = steps;
