// Best Time to Buy and Sell Stock (LeetCode #121)
//
// Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction (i.e., buy one and sell
// one share of the stock), design an algorithm to find the maximum profit.
//
// Note that you cannot sell a stock before you buy one.

function buyAndSell(prices) {
  let low = Number.MAX_SAFE_INTEGER;
  let bestProfit = 0;
  for (let price of prices) {
    const profit = price - low;
    if (price < low) low = price;
    if (profit > bestProfit) bestProfit = profit;
  }
  return bestProfit;
}

let prices = [7, 1, 5, 3, 6, 4];

console.log(buyAndSell(prices)); // 5

// O(n) - linear time
// O(1) - constant space
