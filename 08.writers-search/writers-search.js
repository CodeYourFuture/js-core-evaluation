// check the tests and write code to make it pass

var findWriter = function(personsArray, name) {
  return [
    personsArray.find(function(person) {
      return (
        person["firstName"].toLowerCase() == name.toLowerCase() ||
        person["lastName"].toLowerCase() == name.toLowerCase()
      );
    })
  ];
};

module.exports = findWriter;
