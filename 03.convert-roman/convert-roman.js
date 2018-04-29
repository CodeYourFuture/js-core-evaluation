/**
 * This function that converts an Arabic number (like 1,2,5) to Roman numbers (like I, II, V)
 *
 * (only handle cases from 1 to 10)
 */
// 
function convert(num) {
  var result = "";
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  for (var i = 0; i <= decimal.length; i++) {
    while (num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}
module.exports = convert;
