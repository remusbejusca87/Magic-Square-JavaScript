const s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

function formingMagicSquare(s) {
  const magicMatrices = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];
  let cost = Number.MAX_VALUE;
  let temp = 0;
  let costs = [];

  function printAllCosts() {
    console.log(
      `All costs of converting the input square to a magic square: ${costs}`
    );
  }

  function printMinimalCost() {
    console.log(
      `Minimal cost of converting the input square to a magic square is: ${cost}`
    );
  }
  for (let i = 0; i < magicMatrices.length; i++) {
    temp =
      Math.abs(s[0][0] - magicMatrices[i][0]) +
      Math.abs(s[0][1] - magicMatrices[i][1]) +
      Math.abs(s[0][2] - magicMatrices[i][2]) +
      Math.abs(s[1][0] - magicMatrices[i][3]) +
      Math.abs(s[1][1] - magicMatrices[i][4]) +
      Math.abs(s[1][2] - magicMatrices[i][5]) +
      Math.abs(s[2][0] - magicMatrices[i][6]) +
      Math.abs(s[2][1] - magicMatrices[i][7]) +
      Math.abs(s[2][2] - magicMatrices[i][8]);
    cost = temp < cost ? temp : cost;
    costs.push(temp);
  }
  printAllCosts();
  printMinimalCost();
}
formingMagicSquare(s);
