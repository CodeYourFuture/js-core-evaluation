// check the tests and write code to make it pass
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
var findWriter = function(writers, name) {
  return writers.filter(function(writer) {
    return (
      writer.firstName == toTitleCase(name) ||
      writer.lastName == toTitleCase(name)
    );
  });
};
module.exports = findWriter;
