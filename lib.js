exports.isFactor = function (num, fact) {
  if (num < fact) return false;
  return (num/fact) === Math.floor(num/fact);
}

exports.areFactors = function (num, facts) {
  for(var i in facts) if (!exports.isFactor(num, facts[i])) return false;
  return true;
}

exports._test = function() {
  console.log(exports.isFactor(20, 4));
  console.log(exports.isFactor(21, 4) === false);
  console.log(exports.isFactor(21, 7));

  console.log(exports.areFactors(3, [3, 1]));
  console.log(exports.areFactors(21, [3, 7, 1]));
  console.log(exports.areFactors(21, [3, 8, 1]) === false);
}

//exports._test();
