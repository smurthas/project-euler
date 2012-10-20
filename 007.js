// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
// that the 6th prime is 13.
//
// What is the 10 001st prime number?

var lib = require('./lib');

exports.run = lib.findPrime;

exports.input = 10001;
exports.expected = 104743;

exports.test = {
  input: 6,
  expected: 13
}
