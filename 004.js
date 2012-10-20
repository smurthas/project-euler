function isPalindrome(num) {
  var str = num.toString();
  for (var i=0; i < str.length/2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
  }
  return true;
}

//var MAX = 99;
var MAX = 999;
exports.run = function() {
  var largestPalindrome = 0;
  for (var i = MAX; i > 0; i--) {
    for (var j = MAX; j > 0; j--) {
      var k = i*j;
      if (k > largestPalindrome && isPalindrome(k)) largestPalindrome = k;
    }
  }
  return largestPalindrome;
}

exports.expected = 906609;
