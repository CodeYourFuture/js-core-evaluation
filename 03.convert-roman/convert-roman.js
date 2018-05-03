/**
 * This function that converts an Arabic number (like 1,2,5) to Roman numbers (like I, II, V)
 *
 * (only handle cases from 1 to 10)
 */
function convert(number) {
  // code
  if (number === 1){
    return "I";
  }else if (number===2 ){
    return "II";
  }else if (number===3) {
    return "III"
  }else if (number===4){
    return"IV"
  }else if (number===5){
    return "V"
  }else if (number===6){
    return "VI"
  }else if (number===7){
    return "VII"
  }else if (number===8){
    return "VIII"
  }else if (number===9){
    return "IX"
  }else if (number===10){
    return "X"
  }
  
}

module.exports = convert;
