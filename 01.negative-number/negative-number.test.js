var negativeNumber = require("./negative-number");

test("returns -20 if passed -20", function() {
  var negative = negativeNumber(-20);
  expect(negative).toEqual(-20);
});

test("returns 40 if passed -40", function() {
  var negative = negativeNumber(40);

  expect(negative).toEqual(-40);
});

test("returns 0 if passed 0", function() {
  var negative = negativeNumber(0);
  expect(negative).toEqual(0);
});
