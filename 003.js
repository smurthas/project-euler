//var num = 13195;
var NUM = 600851475143;

function intSqrt(num) { return Math.floor(Math.sqrt(num)); }

console.log(intSqrt(8), intSqrt(9));

function isFactor(num, fact) {
  return (num/fact) === Math.floor(num/fact);
}

console.log(isFactor(10, 2),  isFactor(11, 3));

function isPrime(n) {
  if (n < 2) return false;
  var mx = intSqrt(n);
  for (var i = mx; i > 1; i--) {
    if (isFactor(n, i)) return false;
  }
  return true;
}

console.log(isPrime(1), isPrime(2), isPrime(3), isPrime(4), isPrime(5), isPrime(49), isPrime(71));

function largestPrime(num) {
  var max = intSqrt(num);
  for(var i = max; i > 1; i--) {
    if (isFactor(num, i) && isPrime(i)) return i;
  }
  return false;
}


console.log(largestPrime(NUM));
