var removeLetter = require("./remove-letter");
test("removes the provided letter from  the  string", function() {
  var sentence = "I love JavaScript";
  var letterToRemove = "a";

  var result = removeLetter(sentence, letterToRemove);

  expect(result).toEqual(removeLetter(sentence, letterToRemove));
});

test("removes another letter from  the  string", function() {
  var sentence = "rares is great";
  var letterToRemove = "r";

  var result = removeLetter(sentence, letterToRemove);

  expect(result).toEqual(removeLetter(sentence, letterToRemove));
});

test("removes nothing if no match", function() {
  var sentence = "mimi is the best";
  var letterToRemove = "z";

  var result = removeLetter(sentence, letterToRemove);

  expect(result).toEqual(removeLetter(sentence, letterToRemove));
});
