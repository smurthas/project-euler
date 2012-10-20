var lib = require('./lib');
//var num = 13195;
var NUM = 600851475143;

function largestPrime(num) {
  var max = lib.intSqrt(num);
  for(var i = max; i > 1; i--) {
    if (lib.isFactor(num, i) && lib.isPrime(i)) return i;
  }
  return false;
}

exports.run = largestPrime.bind(largestPrime, NUM);
exports.expected = 6857;
