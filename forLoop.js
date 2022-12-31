const num = [
  [1, 6, 8],
  [2, 3, 4],
  [5, 6, 7],
];
var str = "";
for (let i = 0; i < num.length; i++) {
  for (let j = 0; j < num[i].length; j++) {
    str += num[i][j] + " ";
  }
}
console.log(str);