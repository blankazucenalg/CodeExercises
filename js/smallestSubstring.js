/**
 * Find shortest substring that contains all of the characters from array
 * (First solution)
 * @param {string[]} arr Array of unique characters
 * @param {string} str String to search shortest substring
 * @returns Shortest string
 */
function getShortestUniqueSubstring1(arr, str) {
  const charsInArray = arr.length;
  let index = 0;
  let subStringSize = charsInArray;
  while (index < str.length && subStringSize <= str.length) {
    let substring = str.slice(index, index + subStringSize);
    let charsIntersection = arr.filter((c) => substring.includes(c));
    let subStringContainsAllChars = charsIntersection.length === charsInArray;
    if (subStringContainsAllChars) {
      // Substring contains all the characters
      return substring.join('');
    } else {
      if (index === str.length - 1) {
        // Reset index, get a bigger substring size
        index = 0;
        subStringSize++;
      } else {
        index++;
      }
    }
  }
  // No substring
  return '';
}

/**
 * Find shortest substring that contains all of the characters from array
 * (Optimal time answer)
 * @param {string[]} arr Array of unique characters
 * @param {string} str String to search shortest substring
 * @returns Shortest string
 */
function getShortestUniqueSubstring(arr, str) {
  let headIndex = 0;
  let result = '';
  let uniqueCounter = 0;
  let countMap = new Map();

  // initialize countMap
  for (let i = 0; i < arr.length; i++) {
    countMap.set(arr[i], 0);
  }

  // scan str
  for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
    // handle the new tail
    tailChar = str.charAt(tailIndex);

    // skip all the characters not in arr
    if (countMap.has(tailChar) === false) {
      continue;
    }

    tailCount = countMap.get(tailChar);
    if (tailCount == 0) {
      uniqueCounter += 1;
    }

    countMap.set(tailChar, tailCount + 1);

    // push head forward
    while (uniqueCounter == arr.length) {
      tempLength = tailIndex - headIndex + 1;
      if (tempLength === arr.length) {
        // return a substring of str from
        // headIndex to tailIndex (inclusive)
        return str.substring(headIndex, tailIndex + 1);
      }

      if (result == '' || tempLength < result.length) {
        // return a substring of str from
        // headIndex to tailIndex (inclusive)
        result = str.substring(headIndex, tailIndex + 1);
      }
      headChar = str.charAt(headIndex);

      if (countMap.has(headChar)) {
        headCount = countMap.get(headChar) - 1;
        if (headCount === 0) {
          uniqueCounter -= 1;
        }
        countMap.set(headChar, headCount);
      }
      headIndex += 1;
    }
  }
  return result;
}

module.exports = getShortestUniqueSubstring;
