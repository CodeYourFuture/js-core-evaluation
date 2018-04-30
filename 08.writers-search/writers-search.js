// check the tests and write code to make it pass
var findWriter = function(persons, name) {
    
    // name = name[0].toUpperCase() + name.substring(1);

    var result =persons.filter(person => {
        if (person.firstName.toLowerCase() === name.toLowerCase() || person.lastName.toLowerCase() === name.toLowerCase()) {
            return true;
        }
        return false;
    })
    return result;
}

module.exports = findWriter;