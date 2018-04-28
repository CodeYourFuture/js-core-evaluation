/**
 * The function takes two parameters: a sentence and a letter
 * it will return a new sentence with all instances of the letter removed
 *
 * Hint: this is similar to removeVowels EXCEPT that we don't remove  vowels
 * instead, we remove whatever letter is passed to the function
 */
function removeLetter(sentence, letter) {
  var characters = sentence.split("");
  var result = [];
  for (i = 0; i < characters.length; i++) {
    if (characters[i] === letter) {
      result.push("");
    } else {
      result.push(characters[i]);
    }
  }
  return result.join("");
}

module.exports = removeLetter;
