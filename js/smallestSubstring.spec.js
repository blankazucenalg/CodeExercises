/**
 * Test cases for Smallest Substring of all Characters
 */
const getShortestUniqueSubstring = require('./smallestSubstring');

describe('Smallest substring of all characters', () => {
  test('Case #1', () => {
    expect(getShortestUniqueSubstring(['A'], '')).toBe('');
  });

  test('Case #2', () => {
    expect(getShortestUniqueSubstring(['A'], 'B')).toBe('');
  });

  test('Case #3', () => {
    expect(getShortestUniqueSubstring(['A'], 'A')).toBe('A');
  });

  test('Case #4', () => {
    expect(
      getShortestUniqueSubstring(['A', 'B', 'C'], 'ADOBECODEBANCDDD')
    ).toBe('BANC');
  });

  test('Case #5', () => {
    expect(
      getShortestUniqueSubstring(
        ['A', 'B', 'C', 'E', 'K', 'I'],
        'KADOBECODEBANCDDDEI'
      )
    ).toBe('KADOBECODEBANCDDDEI');
  });
});
