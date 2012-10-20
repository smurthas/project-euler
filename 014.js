// The following iterative sequence is defined for the set of positive integers:
//
// n  n/2 (n is even)
// n  3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following
// sequence:
//
// 13  40  20  10  5  16  8  4  2  1
// It can be seen that this sequence (starting at 13 and finishing at 1)
// contains 10 terms. Although it has not been proved yet (Collatz Problem), it
// is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.


exports.run = function(limit) {
  var max = 1;
  var num = 1;
  for (var i = 1; i < limit; i++) {
    var count = findSeriesCount(i);
    if (count > max) {
      max = count;
      num = i;
    }
  }
  return num;
}

exports.input = 1000000;
exports.expected = 837799;

function findSeriesCount(num, print) {
  var count = 1;
  while (num !== 1) {
    num = nextInSeries(num);
    count++;
  }
  return count;
}

function nextInSeries(num) {
  if (num % 2 === 0) return num/2;
  return 3 * num + 1;
}
