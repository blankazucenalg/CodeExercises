'use strict';
/**
i   arr                     swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3) 
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
 */
function minimumSwaps(arr) {
  var start = new Date();
  const sortedArr = [...arr].sort((a, b) => (a < b ? -1 : 1));
  let countSwaps = 0;
  console.log(arr.toString());
  for (let i = 0; i < arr.length - 1; i++) {
    let value = arr[i];
    let expected = sortedArr[i];
    if (value !== expected) {
      // Not sorted -> Swap position
      countSwaps += 1;
      // Find right number
      for (let j = i + 1; j < arr.length; j++) {
        if (expected === arr[j]) {
          let tmp = arr[j];
          arr[j] = value;
          arr[i] = tmp;
          console.log(arr.toString());
          break;
        }
      }
    }
  }
  console.log(countSwaps);
  var end = new Date() - start;
  console.info('Execution time: %dms', end);
  return countSwaps;
}

console.assert(minimumSwaps([4, 3, 1, 2]) === 3);
console.assert(minimumSwaps([2, 3, 4, 1, 5]) === 3);
console.assert(minimumSwaps([1, 3, 5, 2, 4, 6, 7]) === 3);
console.assert(minimumSwaps([7, 1, 3, 2, 4, 5, 6]) === 5);
console.assert(
  minimumSwaps([
    2,
    31,
    1,
    38,
    29,
    5,
    44,
    6,
    12,
    18,
    39,
    9,
    48,
    49,
    13,
    11,
    7,
    27,
    14,
    33,
    50,
    21,
    46,
    23,
    15,
    26,
    8,
    47,
    40,
    3,
    32,
    22,
    34,
    42,
    16,
    41,
    24,
    10,
    4,
    28,
    36,
    30,
    37,
    35,
    20,
    17,
    45,
    43,
    25,
    19,
  ]) === 46
);
