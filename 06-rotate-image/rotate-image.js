// Rotate Image (LeetCode #48)
//
// You are given an n x n 2D matrix representing an image
//
// Rotate the image by 90 degrees (clockwise)
//
// You have to rotate the image IN PLACE (no second matrix)

var rotate = function (matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};

console.table(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //

// O(n^2) - quadratic time
// O(1) - constant space
