const { test } = require('@jest/globals');
const { describe } = require('yargs');
const ticTacWin = require('./ticTacWin');

describe('Tic Tac Win', () => {
  test('Find winner by diagonal', () => {
    let board = [
      ['x', 'o', 'o'],
      ['o', 'x', 'x'],
      ['o', 'x', 'x'],
    ];
    expect(ticTacWin(board)).toBe(`Winner is 'x' in diagonal \\`);
  });

  test('Find winner by row', () => {
    let board = [
      ['x', 'x', 'x', 'x'],
      ['x', 'o', 'o', 'o'],
      ['o', 'o', 'x', 'o'],
      ['o', 'o', 'x', 'x'],
    ];
    expect(ticTacWin(board)).toBe(`Winner is 'x' in row 0`);
  });

  test('Find winner by column', () => {
    let board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'x'],
      ['o', 'x', 'x'],
    ];
    expect(ticTacWin(board)).toBe(`Winner is 'x' in column 2`);
  });

  test("There's no winner, it's a draw", () => {
    let board = [
      ['x', 'o', 'x'],
      ['o', 'o', 'x'],
      ['x', 'x', 'o'],
    ];
    expect(ticTacWin(board)).toBe(`It's a draw!`);
  });

  test('Throw error', () => {
    let board = [[], [], []];
    expect(() => {
      ticTacWin(board);
    }).toThrowError();
  });
});
