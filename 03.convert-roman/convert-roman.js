/**
 * This function that converts an Arabic number (like 1,2,5) to Roman numbers (like I, II, V)
 *
 * (only handle cases from 1 to 10)
 */
result =[];
function convert(number) {
    switch(number){
      case 1: return 'I';break;
      case 2: return'II';break;
      case 3: return'III';break;
      case 4: return "IV";break;
      case 5: return 'V';break;
      case 6: return 'VI';break;
      case 7: return 'VII';break;
      case 8: return 'VIII';break;
      case 9: return 'IX';break;
  default:
return "X";
    }// code
}

module.exports = convert;
