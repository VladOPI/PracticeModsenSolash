function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i >= 0; i--) {
    for (let j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}
const pyramid = [
  [52],
  [44, 133],
  [9, 12, 4],
  [20, 93, 44, 21]
];
const result = longestSlideDown(pyramid);
console.log("Максимальная сумма пути:", result);
