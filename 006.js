//http://en.wikipedia.org/wiki/Square_pyramidal_number
function sumOfSquares(n) {
  return (2*n*n*n + 3*n*n + n) / 6;
}

function squareOfSum(n) {
  return Math.pow((n+1) * n / 2, 2);
}

function diff(n) {
  return squareOfSum(n) - sumOfSquares(n);
}

//console.log(diff(10));
//console.log(diff(100));


exports.run = diff.bind(diff, 100);
exports.expected = 25164150;
