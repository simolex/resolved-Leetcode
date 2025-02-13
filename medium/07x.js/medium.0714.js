var maxProfit = function (prices, fee) {
    let n = prices.length;
    let come = 0;
    let balance = -prices[0];

    for (let i = 1; i < n; i++) {
        come = Math.max(come, prices[i] + balance - fee);
        balance = Math.max(balance, come - prices[i]);
    }

    return come;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2));
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3));
