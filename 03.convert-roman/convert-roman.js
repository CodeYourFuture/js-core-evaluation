/**
 * This function that converts an Arabic number (like 1,2,5) to Roman numbers (like I, II, V)
 *
 * (only handle cases from 1 to 10)
 */
function convert(number) {
  var numbers = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
  var roman = [ 'X', 'IX', 'VIII', 'VII', 'VI', 'V', 'IV', 'III', 'II', 'I' ];

  var romanNumber = '';

  for (var i = 0; i < numbers.length; i++) {
    while (numbers[i] <= number) {
      romanNumber += roman[i];
     number -= numbers[i];
    }
  }

 return romanNumber;
  // code
}

module.exports = convert;
