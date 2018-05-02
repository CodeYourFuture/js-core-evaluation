// check the tests and write code to make it pass
function findWriter(persons, name) {
  return persons.filter(function(person) {
    if (
      person.firstName.toLowerCase() === name.toLowerCase() ||
      person.lastName.toLowerCase() === name.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
  });
}

module.exports = findWriter;
