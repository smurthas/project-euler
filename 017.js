// If the numbers 1 to 5 are written out in words: one, two, three, four, five,
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
//
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out
// in words, how many letters would be used?
//
//
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
// forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
// letters. The use of "and" when writing out numbers is in compliance with
// British usage.


var words = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
}

function prettyPrintNum(num) {
  if (num === 0) return '';
  if (words[num]) return words[num];
  if (num > 20 && num < 100) {
    return words[Math.floor(num/10)*10] + words[(num % 10)];
  } else if(num < 1000) {
    var str = words[Math.floor(num/100)] +'hundred';
    var str2 = prettyPrintNum(num % 100);
    if (str2) str += 'and' + str2;
    return str;
  } else if(num < 10000) {
    return words[Math.floor(num/1000)] + 'thousand' + prettyPrintNum(num % 1000);
  }
}

exports.test = {
  input: 5,
  expected: 19
};

exports.input = 1000;
exports.expected = 21124;
exports.run = function(max) {
  var strs = [];
  for(var i = 1; i <= max; i++) {
    strs.push(prettyPrintNum(i));
  }
  return strs.join('').length;
}
