// check the tests and write code to make it pass
var findWriter = function(persons, name) {
  return persons.filter(function(person) {
    var nameLowerCase = name.toLowerCase();
    var firstNameLowerCase = person.firstName.toLowerCase();
    var lastNameLoweCase = person.lastName.toLowerCase();
    return (
      firstNameLowerCase === nameLowerCase || lastNameLoweCase === nameLowerCase
    );
  });
};

module.exports = findWriter;
