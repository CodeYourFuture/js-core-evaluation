// check the tests and write code to make it pass
function writersSearch(writers, name) {
    return writers.filter(writer => {
        if (writer.firstName.toLowerCase() === name.toLowerCase() || writer.lastName.toLowerCase() === name.toLowerCase()) {
            return true;
        } else {
            return false;
        }
    });


}
module.exports = writersSearch;