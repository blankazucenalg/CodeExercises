/**
 * i   arr                         swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
 */
function minimumSwaps(arr) {
  const sortedArr = arr.sort();
  let countSwaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortedArr[i]) {
      // Swap position
      countSwaps += 1;
    }
  }
}

console.assert(minimumSwaps([4, 3, 1, 2], 3));
console.assert(minimumSwaps([2, 3, 4, 1, 5], 3));
console.assert(minimumSwaps([1, 3, 5, 2, 4, 6, 7], 3));
console.assert(minimumSwaps([7, 1, 3, 2, 4, 5, 6], 5));
