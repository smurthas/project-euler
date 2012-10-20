// A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,
//
// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var lib = require('./lib');

exports.run = function (sum) {
  for(var c = sum - 2; c > 2; c--) {
    for(var b = sum - c - 1; b > 1; b--) {
      var a = sum - c - b;
      if (lib.isPythagoreanTriplet(a, b, c)) return a*b*c;
    }
  }
}

exports.input = 1000;
exports.expected = 31875000;
