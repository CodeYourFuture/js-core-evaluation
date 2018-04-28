/**
 * A function that takes an array of Writers objects and finds the ones who are alive
 * 
 * Think which array method we need to use (map, forEach, filter, find, every) 
 *
 */
var findAlive = function(writers) {
    return writers.filter(person=>person.alive===true);
};

module.exports = findAlive;
