var oppositeNumber = require("./opposite-number");

test("returns 20 if passed -20", function() {
  var number = -20;
  var opposite = oppositeNumber(number);
  expect(opposite).toEqual(20);
});

test("returns -40 if passed 40", function() {
  var number = 40;
  var opposite = oppositeNumber(number);

  expect(opposite).toEqual(-40);
});

// add a test for  0
// it should return zero if passed zero

test("returns 0 if passed 0", function() {
  var number = 0;
  var opposite = oppositeNumber(0);

  expect(opposite).toEqual(0);
});
