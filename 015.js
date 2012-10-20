// Starting in the top left corner of a 2x2 grid, there are 6 routes (without
// backtracking) to the bottom right corner.
//
//
// How many routes are there through a 20x20 grid;


// it's a binomial coefficient/pascal's triangle


var lib = require('./lib');


exports.run = function(input) {
  return lib.pascal(input * 2)[input];
}

exports.test = {
  input: 2,
  expected: 6
};

exports.input = 20;
exports.expected = 137846528820;
