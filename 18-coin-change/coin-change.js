// Coin Change (LeetCode #322)
//
// You are given coins of different denominations and a total amount
// of money amount. Write a function to compute the fewest number of
// coins that you need to make up that amount. If that amount of money
// cannot be made up by any combination of the coins, return -1.
//
// You may assume that you have an infinite number of each kind of coin.

function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  const minCoins = dp[amount];
  if (minCoins >= Number.MAX_SAFE_INTEGER) return -1;
  return minCoins;
}

let coins = [1, 2, 5];
let amount = 11;

console.log(coinChange(coins, amount)); // 3

// O(n * k) time complexity
// O(n) - linear space, where n = amount
