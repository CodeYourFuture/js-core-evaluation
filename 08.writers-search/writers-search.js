// check the tests and write code to make it pass

function findWriter(parameter) {
  return parameter.filter(function(obj) {
    if (obj.firstName === "Zadie" || obj.lastName === "Smith") {
      return `${obj.firstName} ${obj.lastName}`;
    }
  });
}

module.exports = findWriter;
