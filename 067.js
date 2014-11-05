// By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
//
// 3
// 7 4
// 2 4 6
// 8 5 9 3
//
// That is, 3 + 7 + 4 + 9 = 23.
//
// Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.
//
// NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 altogether! If you could check one trillion (1012) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)

var fs = require('fs');

var lines = fs.readFileSync('067-triangle.txt').toString().split('\n');

var NUMBERS = [];
lines.forEach(function(line) {
  if (line === '') return;
  var lineNumbers = [];
  line = line.split(' ');
  line.forEach(function(numberString) {
    lineNumbers.push(parseInt(numberString, 10));
  });
  NUMBERS.push(lineNumbers);
});
console.error('NUMBERS', NUMBERS);


var assert = require('assert');

var TEST_NUMBERS = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
];

function findMaxPathValue(numbers) {
  for (var i = numbers.length - 1; i > 0; i--) {
    var row = numbers[i];
    var aboveRow = numbers[i-1];
    for (var j = 0; j < row.length - 1; j++) {
      aboveRow[j] += Math.max(row[j], row[j+1]);
    }
  }

  return numbers[0][0];
}

assert.equal(findMaxPathValue(TEST_NUMBERS), 23);

console.log(findMaxPathValue(NUMBERS));
