// check the tests and write code to make it pass
var findWriter = function(writers, name) {
  var array = writers.filter(function(writer) {
    if (
      writer.firstName === name ||
      writer.lastName === name ||
      writer.firstName.toUpperCase() === name ||
      writer.lastName.toUpperCase() === name ||
      writer.firstName.toLowerCase() === name ||
      writer.lastName.toLowerCase() === name
    ) {
      return true;
    }
  });
  return array;
};
module.exports = findWriter;
