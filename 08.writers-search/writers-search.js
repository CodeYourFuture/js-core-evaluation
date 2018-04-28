// check the tests and write code to make it pass
var findWriter = function(persons, writer) {
    return persons.filter(person => 
        person.firstName.toLowerCase() === writer.toLowerCase() || 
        person.lastName.toLowerCase() === writer.toLowerCase()
    );
};

module.exports = findWriter;