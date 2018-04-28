// check the tests and write code to make it pass
function writersSearch(writers, name) {
  newName = name.toLowerCase();
  return writers.filter(function(writer) {
    return (
      writer.lastName.toLowerCase() === newName ||
      writer.firstName.toLowerCase() === newName
    );
  });
}
module.exports = writersSearch;
