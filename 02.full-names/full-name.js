/**
 * This function takes three parameters - a firstName, lastName and a title
 * It will return a full name with title
 * i.e. if passed "Mimi", "Popa", "Her Excellency"
 * then it will return "Her Excellency Mimi Popa"
 *
 * Hint: Notice there is space after each argument, i.e. it is not HerExcellencyMimiPopa
 */
const fullName = (firstName, lastName, title) => {
  let fullName = title + " " + firstName + " " + lastName;
  return fullName;
};

module.exports = fullName;
