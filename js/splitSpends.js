/**
 * Split The Money Spent
 * @param {number[]} spends Array of spends, person is matched by initial index of this array
 * @returns Array of transactions that have to be made to equally distribute the spends
 */
function splitTheMoney(spends) {
  // Get mean spent
  let meanSpent = spends.reduce((prev, curr) => prev + curr) / spends.length;
  // Get differences (underpayment and overpayment)
  const underpayment = [];
  const overpayment = [];
  spends.forEach((value, index) => {
    let difference = value - meanSpent; // "> 0"; overpay : "< 0"; underpay
    if (difference > 0) {
      overpayment.push({
        person: index,
        payment: value,
        difference: difference,
      });
    }
    if (difference < 0) {
      underpayment.push({
        person: index,
        payment: value,
        difference: difference,
      });
    }
  });
  // Match underspends with overspends
  let i = underpayment.length - 1;
  let j = overpayment.length - 1;
  let transactions = [];
  while (i >= 0 && j >= 0) {
    let amountToPay = Math.min(
      Math.abs(underpayment[i].difference),
      overpayment[j].difference
    );
    underpayment[i].difference += amountToPay;
    overpayment[j].difference -= amountToPay;
    transactions.push(
      `Person ${underpayment[i].person} pays \$${amountToPay.toFixed(
        2
      )} to person ${overpayment[j].person}`
    );
    if (underpayment[i].difference === 0) {
      i--;
    }
    if (overpayment[j].difference === 0) {
      j--;
    }
  }
  console.log(transactions);
  return transactions;
}

splitTheMoney([5, 5, 10, 20]);
splitTheMoney([20, 5, 5, 5, 10, 15]);
splitTheMoney([30, 40, 5, 100, 120, 115]);
splitTheMoney([100, 50, 80, 150, 30, 35]);
