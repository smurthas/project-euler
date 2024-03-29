exports.isFactor = function (num, fact) {
  if (num < fact) return false;
  return num % fact === 0;
}


exports.stringProduct = function (aa, bb) {
  var a = exports.stringToArray(aa);
  var b = exports.stringToArray(bb);
  var prods = [];
  var carry = 0;
  for (var i in b) {
    var bi = parseInt(b[i]);
    var row = stringTimesNumber(aa, bi);
    for (var j = 0; j < i; j++) row += '0';
    prods.push(row);
  }
  return exports.sumStrings(prods);
}

function stringTimesNumber(str, num) {
  var prod = [];
  var carry = 0;
  str = exports.stringToArray(str).join('');
  for (var i = 0; i < str.length; i++) {
    var si = parseInt(str.charAt(i));
    si *= num;
    si += carry;
    prod.push(si % 10);
    carry = Math.floor(si/10);
  }
  if (carry !== 0) prod.push(carry);
  return prod.reverse().join('');
}

// least significant digit in 0 position
exports.stringToArray = function(a) {
  var ret = [];
  for(var i = 0; i < a.length; i++) {
    ret.push(parseInt(a.charAt(i)));
  }
  return ret.reverse();
}

function zeroFill(a, totalLength) {
  var len = a.length;
  for (var i = 0; i < totalLength - len; i++) {
    a.push(0);
  }
  return a;
}

exports.stringSum = function(a, b) {
  var aa = zeroFill(exports.stringToArray(a), b.length);
  var bb = zeroFill(exports.stringToArray(b), a.length);
  var sum = [];
  var carry = 0, i = 0;
  for(; i < aa.length &&  i < bb.length; i++) {
    var tmp = aa[i] + bb[i] + carry;
    if (tmp > 9) {
      carry = 1;
      tmp -= 10;
    } else carry = 0;
    sum.push(tmp);
  }
  if (carry === 1) sum.push(1);
  sum = sum.reverse();
  return sum.join('');
}

exports.sumStrings = function(strings) {
  var sum = strings[0];
  for (var i = 1; i < strings.length; i++) {
    sum = exports.stringSum(sum, strings[i]);
  }
  return sum;
}

exports.sumDigitsInString = function (str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i));
  }
  return sum;
}

exports.stringPow = function(str, powNum) {
  var prod = '1';
  for (var i = 0; i < powNum; i++) prod = exports.stringProduct(prod, str);
  return prod;
}


exports.areFactors = function (num, facts) {
  for(var i in facts) if (!exports.isFactor(num, facts[i])) return false;
  return true;
}

exports.intSqrt = function (num) { return Math.floor(Math.sqrt(num)); }

exports.isPrime = function (n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  var mx = exports.intSqrt(n);
  if (mx % 2 === 0) mx++;
  for (var i = mx; i > 1; i-=2) {
    if (exports.isFactor(n, i)) return false;
  }
  return true;
}

exports.findPrime = function(n) {
  var primes = 0;
  var i = 1;
  while (primes < n) {
    i++;
    if (exports.isPrime(i)) primes++;
  }
  return i;
}

exports.findPrimeSum = function(n) {
  n -= 2;
  var sum = 2;
  var i = 1;
  for(var i = 1; i < n; i+=2) {
    if (exports.isPrime(i)) sum += i;
  }
  return sum;
}

exports.isPythagoreanTriplet = function(a, b, c) {
  return a*a + b*b === c*c;
}

exports.sumSeries = function(n) {
  return (n+1) * n / 2;
}

exports.getFactors = function(n) {
  if (n < 1) return [];
  if (n === 1) return [1];
  if (n === 2) return [1,2];
  var factors = [1,n];
  var max = n/2 + 1;
  for (var i = 2; i < max; i++) {
    if (exports.isFactor(n, i)) {
      factors.push(i);
      var mate = n / i;
      if (i !== mate) factors.push(mate);
      max = mate;
    }
  }
  return factors;
}

exports.nCr = function(n, r) {
  if (n > 25) return exports.pascal(n)[r];
  var nCr = 1;
  for (var i = n; i > r; i--) nCr *= i;
  for (var i = (n-r); i > 1; i--) nCr /= i;
  return nCr;
}

exports.factorial = function(n) {
  if (n === 2) return 2;
  if (n === 1) return 1;
  if (n === 0) return 1;
  var fact = n;
  for (var i = n-1; i > 1; i--) fact *= i;
  return fact;
}

exports.pascal = function(row) {
  var cur = [1, 1], prev = [1];
  if (row === 0) return prev;
  if (row === 1) return cur;
  for(var i = 1; i < row; i++) {
    prev = cur;
    cur = pascalNextRow(cur);
  }
  return cur;
}

function pascalNextRow(cur) {
  var next = [];
  for (var i = 0; i < cur.length; i++) {
    var val = cur[i-1] || 0;
    val += cur[i] || 0;
    next.push(val);
  }
  next.push(1);
  return next;
}

exports._test = function() {
  console.log(exports.isFactor(20, 4));
  console.log(exports.isFactor(21, 4) === false);
  console.log(exports.isFactor(21, 7));
  console.log(exports.isFactor(4, 2));

  console.log(exports.areFactors(3, [3, 1]));
  console.log(exports.areFactors(21, [3, 7, 1]));
  console.log(exports.areFactors(21, [3, 8, 1]) === false);

  console.log(exports.isPythagoreanTriplet(3, 4, 5));
  console.log(exports.isPythagoreanTriplet(3, 4, 6) === false);

  console.log(exports.sumSeries(7) === 28);

  console.log(exports.getFactors(4).length === 3);
  console.log(exports.getFactors(6).length === 4);
  console.log(exports.getFactors(27).length === 4);
  console.log(exports.getFactors(2).length === 2);

  console.log(exports.factorial(3) === 6);
  console.log(exports.factorial(4) === 24);
  console.log(exports.factorial(7) === 5040);
  console.log(exports.factorial(20) === 2432902008176640000);

  console.log(exports.nCr(2, 2) === 1);
  console.log(exports.nCr(3, 2) === 3);
  console.log(exports.nCr(20, 10) === 184756);
  console.log(exports.nCr(40, 20) === 137846528820);

  console.log(pascalNextRow([1, 1])[1] === 2);
  console.log(exports.pascal(4)[2] === 6);
  console.log(exports.pascal(40)[20] === 137846528820);

  console.log(exports.stringProduct('4','4') === '16');
  console.log(exports.stringProduct('4','16') === '64');
  console.log(exports.stringProduct('123456','987654') ===
              exports.stringProduct('987654','123456'));
  console.log(exports.stringProduct('34','79') === '2686');

  console.log(exports.stringPow('4', 3) === '64');
  console.log(exports.stringPow('2', 20) === '1048576');
  console.log(exports.stringPow('12', 5) === '248832');
}

if (process.argv[1].indexOf('lib.js') === process.argv[1].length - 6) {
  exports._test();
}
