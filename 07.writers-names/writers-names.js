/**
 * The function takes an array of objects (array of writers)
 * and returns an array (same length) with the full names of the writers
 *
 * Hint: which array method returns the same length of items
 */
var getWritersNames = function(writers) {};
var getWritersNames = function(writers) {
  return writers.map(writer => {
    return writer.firstName + " " + writer.lastName;
  });
};

module.exports = getWritersNames;
