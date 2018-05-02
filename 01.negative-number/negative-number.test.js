var negativeNumber = require("./negative-number");

test("returns -20 if passed -20", function() {
  var negative = negativeNumber(-20);
  expect(negative).toEqual(-20);
});

test("returns -40 if passed -40", function() {
  var negative = negativeNumber(40);

  expect(negative).toEqual(-40);
});

test("return -60 if passed -60", function() {
  var negative = negativeNumber(-60);
  expect(negative).toEqual(-60);
});

test("return 20 if passed 20", function() {
  var negative = negativeNumber(20);
  expect(negative).toEqual(20);
});
