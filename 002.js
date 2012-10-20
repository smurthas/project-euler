var h = 1, i = 2, sum = 0, tmp, max = 4000000;
while (h < max) {
  if (h % 2 === 0) sum += h;
  tmp = i;
  i += h;
  h = tmp;
}

console.log(sum);
