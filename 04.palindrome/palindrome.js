/**
 * A function that takes a word and decides if it is a palindrome or not
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar.
 * 
 * Hint: Think how you would do this on paper, is there a JavaScript string method to help you do the same?
 */
var isPalindrome = function(word) {
   
      for (var i = 0; i < word.length/2; i++) {
       if (word[i] !== word[word.length - 1 - i]) {
           return false;
       }
      }
      return true;
  // code
};

module.exports = isPalindrome;
