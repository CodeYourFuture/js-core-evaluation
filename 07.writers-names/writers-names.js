/**
 * The function takes an array of objects (array of writers)
 * and returns an array (same length) with the full names of the writers
 *
 * Hint: which array method returns the same length of items
 */

var persons = [
  {
    firstName: "Gabriel Garcia",
    lastName: "Marquez",
    occupation: "writer",
    age: 87,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 42,
    alive: true
  }
];

var getWritersNames = function(writers) {
  return writers.map(writer => `${writer.firstName} ${writer.lastName}`);
};

module.exports = getWritersNames;
