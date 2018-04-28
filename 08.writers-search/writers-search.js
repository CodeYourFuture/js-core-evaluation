// check the tests and write code to make it pass
var findWriter = function(persons, writer) {
    return persons.filter(person => {
        if(person.firstName.toLowerCase() === writer.toLowerCase()){
            return true;
        }
        if(person.lastName.toLowerCase() === writer.toLowerCase()){
            return true;
        }
        return false;
    });
};

module.exports = findWriter;