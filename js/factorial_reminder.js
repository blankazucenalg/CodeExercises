function factorialReminder(n) {
  /**
   * Count all the numbers 1 <= x <= n where
   * `(x - 1)! % x == x - 1` is true
   */
  let counter = 0;
  let x_minus_1_fact = 1; // 0!
  for (let x = 1; x <= n; x++) {
    if (BigInt(x_minus_1_fact) % BigInt(x) == BigInt(x - 1)) {
      counter += 1;
    }
    x_minus_1_fact = BigInt(BigInt(x_minus_1_fact) * BigInt(x));
  }
  console.log(counter);
  return counter;
}

function isPrime(n) {
  if (n < 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else {
    let sqrt = Number.parseInt(Math.sqrt(n));
    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
}
function countAllPrimesToN(n) {
  /**
   * Count all the numbers 1 <= x <= n where
   * `(x - 1)! % x == x - 1` is true
   */
  let counter = 0;
  for (let x = 1; x <= n; x++) {
    if (isPrime(x)) {
      counter += 1;
    }
  }
  console.log(counter);
  return counter;
}

var start = new Date().getTime();
console.assert(countAllPrimesToN(50000) === 5134);
var end = new Date().getTime();
console.log('Time: ', end - start);

start = new Date().getTime();
console.assert(factorialReminder(50000) === 5134);
end = new Date().getTime();
console.log('Time: ', end - start);

start = new Date().getTime();
console.assert(countAllPrimesToN(10000) === 1230);
end = new Date().getTime();
console.log('Time: ', end - start);

start = new Date().getTime();
console.assert(factorialReminder(10000) === 1230);
end = new Date().getTime();
console.log('Time:', end - start);
/* 
describe('factorialReminder', () => {
  test('Test 90000', () => {
    expect(factorialReminder(90000)).toBe(8714);
  });

  test('Test 50000', () => {
    expect(factorialReminder(50000)).toBe(5134);
  });

  test('Test 10000', () => {
    expect(factorialReminder(10000)).toBe(1230);
  });

  test('Test 1000', () => {
    expect(factorialReminder(1000)).toBe(169);
  });

  test('Test 4', () => {
    expect(factorialReminder(4)).toBe(3);
  });
});
 */
