// check the tests and write code to make it pass
var findWriter = function(persons, name) {
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.substring(1);
  var array = persons.filter(person => {
    if (person.firstName === name || person.lastName === name) {
      return true;
    }
  });
  return array;
};

module.exports = findWriter;
