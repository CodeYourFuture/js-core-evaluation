/**
 * This function that converts an Arabic number (like 1,2,5) to Roman numbers (like I, II, V)
 *
 * (only handle cases from 1 to 10)
 */

function arabicToRoman(num) {
  var roman = {
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var result = "";

  for (var i in roman) {
    while (num >= roman[i]) {
      result += i;
      num -= roman[i];
    }
  }
  return result;
}

function convert(number) {
  return arabicToRoman(number);
}

module.exports = convert;
