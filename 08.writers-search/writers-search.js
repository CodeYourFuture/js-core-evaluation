// check the tests and write code to make it pass
const findWriter = (persons, writer) => {
    return persons.filter(person => 
        person.firstName.toLowerCase() === writer.toLowerCase() || 
        person.lastName.toLowerCase() === writer.toLowerCase()
    );
};

module.exports = findWriter;