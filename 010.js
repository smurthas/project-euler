// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

var lib = require('./lib');

exports.run = lib.findPrimeSum;

exports.input = 2000000;
exports.expected = 142913828922;

exports.test = {
  input: 10,
  expected: 17
}
