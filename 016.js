// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
//
// What is the sum of the digits of the number 2^1000?

var lib = require('./lib');

exports.input = 1000;
exports.expected = 1366;

exports.test = {
  input: 15,
  expected: 26
};

exports.run = function(pow) {
  var pow = lib.stringPow('2', pow);
  return lib.sumDigitsInString(pow);
}

