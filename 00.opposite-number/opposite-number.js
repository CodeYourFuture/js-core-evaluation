/**
 * This function takes a number and returns its opposite
 * i.e. if given 1, it will return -1
 * if given -1, it will return 1
 * 
 * Hints: Think what do  you need to do convert a number to its opposite (multiply by what?)
 */
function oppositeNumber(number) {
  if (number === 0) {
    return 0;
  }
  return number * -1;
  // code here
}

module.exports = oppositeNumber;
