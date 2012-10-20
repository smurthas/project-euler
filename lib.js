exports.isFactor = function (num, fact) {
  if (num < fact) return false;
  return (num/fact) === Math.floor(num/fact);
}

exports.areFactors = function (num, facts) {
  for(var i in facts) if (!exports.isFactor(num, facts[i])) return false;
  return true;
}

exports.intSqrt = function (num) { return Math.floor(Math.sqrt(num)); }

//console.log(intSqrt(8), intSqrt(9));

exports.isPrime = function (n) {
  if (n < 2) return false;
  var mx = exports.intSqrt(n);
  for (var i = mx; i > 1; i--) {
    if (exports.isFactor(n, i)) return false;
  }
  return true;
}

//console.log(isPrime(1), isPrime(2), isPrime(3), isPrime(4), isPrime(5), isPrime(49), isPrime(71));

exports.findPrime = function(n) {
  var primes = 0;
  var i = 1;
  while (primes < n) {
    i++;
    if (exports.isPrime(i)) primes++;
  }
  return i;
}

exports._test = function() {
  console.log(exports.isFactor(20, 4));
  console.log(exports.isFactor(21, 4) === false);
  console.log(exports.isFactor(21, 7));

  console.log(exports.areFactors(3, [3, 1]));
  console.log(exports.areFactors(21, [3, 7, 1]));
  console.log(exports.areFactors(21, [3, 8, 1]) === false);
}

//exports._test();
