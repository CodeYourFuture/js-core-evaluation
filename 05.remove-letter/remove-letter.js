/**
 * The function takes two parameters: a sentence and a letter
 * it will return a new sentence with all instances of the letter removed
 *
 * Hint: this is similar to removeVowels EXCEPT that we don't remove  vowels
 * instead, we remove whatever letter is passed to the function
 */
function removeLetter(sentence, letter) {
  // code
  var result = [];
  var charter = sentence.split("");
  charter.forEach(function() {
    if (charter === letter) {
      result.push("");
      if (!(charter === letter)) {
        result.push(charter);
      }
    }
  });
  return result.join("");
}
module.exports = removeLetter;
