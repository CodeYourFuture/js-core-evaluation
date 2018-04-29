// check the tests and write code to make it pass
function findWriter(persons,name) {
    return persons.filter(persone =>{
        if (persone.firstName.toLowerCase() === name.toLowerCase() || persone.lastName.toLowerCase() === name.toLowerCase()) {
          return true;
        } else {
          return false;
        }

});
}

module.exports = findWriter;