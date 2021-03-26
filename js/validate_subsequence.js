/**From algoexpert.io  */
function isValidSubsequence(arr, sequence) {
  // Write your code here.
  let idx = 0;
  for (let number of arr) {
    let pivot = sequence[idx];
    if (number === pivot) {
      idx++;
    }
  }
  return idx === sequence.length;
}

console.assert(
  isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]) === true
);
