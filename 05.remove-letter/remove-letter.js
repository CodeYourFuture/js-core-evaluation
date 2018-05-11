/**
 * The function takes two parameters: a sentence and a letter
 * it will return a new sentence with all instances of the letter removed
 *
 * Hint: this is similar to removeVowels EXCEPT that we don't remove  vowels
 * instead, we remove whatever letter is passed to the function
 */

var sentence = "I love JavaScript";
const letter = "a";

function removeLetter(sentence, letter) {
  var outp = "";
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] != letter) {
      outp = outp + sentence[i];
    }
  }
  return outp;
}

console.log(removeLetter(sentence, letter));
module.exports = removeLetter;
