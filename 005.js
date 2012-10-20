//2520 is the smallest number that can be divided by each of the numbers from 1
//to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the
//numbers from 1 to 20?

var lib = require('./lib');

function arrayBetween(l, u) {
  var arr = [];
  for (l; l <= u; l++) arr.push(l);
  return arr;
}

function isFactorOf(fact, nums) {
  for (var i in nums) { if (lib.isFactor(nums[i], fact)) return true; }
  return false;
}

function removeCommons(arr) {
  var newArr = [];
  for (var i=0; i < arr.length; i++) {
    var larger = arr.slice(i + 1, arr.length);
    var ifo = isFactorOf(arr[i], larger);
    if (!ifo) newArr.push(arr[i]);
  }
  return newArr;
}

exports.run = function() {
  var i = 20;
  var facts = arrayBetween(1, i);
  facts = removeCommons(facts);
  i = facts[facts.length-1];
  var inc = i;
  while(!lib.areFactors(i, facts)) {i += inc;}
  return i;
}

exports.expected = 232792560;
