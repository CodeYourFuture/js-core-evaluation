/**
 * This function that converts an Arabic number (like 1,2,5) to Roman numbers (like I, II, V)
 *
 * (only handle cases from 1 to 10)
 */
function convert(num) {
  var roman = "";

  var values = [10, 9, 5, 4, 1];
  var literals = ["X", "IX", "V", "IV", "I"];

  for (i = 0; i < values.length; i++) {
    if (num >= values[i]) {
      if (5 <= num && num <= 8) num -= 5;
      else if (1 <= num && num <= 3) num -= 1;
      else num -= values[i];
      roman += literals[i];
      i--;
    }
  }

  return roman;
}
module.exports = convert;
