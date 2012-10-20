var colors = require('colors');
var CORRECT = 'correct!'.green;
var INCORRECT = 'incorrect!'.red;
var UNSOLVED = 'unsolved'.yellow;

var fs = require('fs');
var files = fs.readdirSync('.');
var problems = {};

for(var i in files) {
  if (files[i].match(/^[0-9]+\.js/)) {
    var num = files[i].substring(0, 3);
    problems[num] = require('./' + num);
  }
}


function test(i, problem, expected, input) {
  var start = Date.now();
  var val = problem.run(input);
  var et = Date.now() - start;
  var correct = expected && val && expected === val;
  console.log(i, ':', et, 'ms :', val,
      expected? (correct? CORRECT:INCORRECT) : UNSOLVED);
  return correct;
}

var ret = 0;

var num = process.argv[2];
if (num) {
  num = num.substring(0, 3);
  var problem = problems[num];
  if (process.argv[3] === 'test') {
    test(num, problem, problem.test.expected, problem.test.input);
    ret = 0;
  } else {
    if (!test(num, problem, problem.expected, problem.input)) ret = 1;
  }
} else {
  for (var i in problems) {
    var expected = problems[i].expected;
    if (!test(i, problems[i], expected, problems[i].input)) ret = 1;
  }
}

process.exit(ret);
