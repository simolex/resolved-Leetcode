/**
 * 121. Best Time to Buy and Sell Stock
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    if (n === 1) {
        return 0;
    }

    const maxPrices = Array(n);

    maxPrices[n - 1] = prices[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        maxPrices[i] = Math.max(maxPrices[i + 1], prices[i]);
    }

    let max;

    max = prices[1] - prices[0];
    for (let i = 1; i < n; i++) {
        max = Math.max(maxPrices[i] - prices[i - 1], max);
    }

    return max < 0 ? 0 : max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 1, 4]));

{
    /* <div class="next-challenge__A4ZV">
    <a
        href="/problems/maximum-subarray/"
        class="next-challenge-btn__L_19 M__1OuS"
        data-question-title-slug="maximum-subarray"
    >
        <span title="Maximum Subarray">Maximum Subarray</span>
    </a>
    <a
        href="/problems/best-time-to-buy-and-sell-stock-ii/"
        class="next-challenge-btn__L_19 M__1OuS"
        data-question-title-slug="best-time-to-buy-and-sell-stock-ii"
    >
        <span title="Best Time to Buy and Sell Stock II">Best Time to Buy and Sell Stock II</span>
    </a>
    <a
        href="/problems/best-time-to-buy-and-sell-stock-iii/"
        class="next-challenge-btn__L_19 H__3Dxi"
        data-question-title-slug="best-time-to-buy-and-sell-stock-iii"
    >
        <span title="Best Time to Buy and Sell Stock III">Best Time to Buy and Sell Stock III</span>
    </a>
    <a
        href="/problems/best-time-to-buy-and-sell-stock-iv/"
        class="next-challenge-btn__L_19 H__3Dxi"
        data-question-title-slug="best-time-to-buy-and-sell-stock-iv"
    >
        <span title="Best Time to Buy and Sell Stock IV">Best Time to Buy and Sell Stock IV</span>
    </a>
    <a
        href="/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
        class="next-challenge-btn__L_19 M__1OuS"
        data-question-title-slug="best-time-to-buy-and-sell-stock-with-cooldown"
    >
        <span title="Best Time to Buy and Sell Stock with Cooldown">Best Time to Buy and Sell Stock with Cooldown</span>
    </a>
    <a
        href="/problems/sum-of-beauty-in-the-array/"
        class="next-challenge-btn__L_19 M__1OuS"
        data-question-title-slug="sum-of-beauty-in-the-array"
    >
        <span title="Sum of Beauty in the Array">Sum of Beauty in the Array</span>
    </a>
    <a
        href="/problems/maximum-difference-between-increasing-elements/"
        class="next-challenge-btn__L_19 E__2cGj"
        data-question-title-slug="maximum-difference-between-increasing-elements"
    >
        <span title="Maximum Difference Between Increasing Elements">
            Maximum Difference Between Increasing Elements
        </span>
    </a>
    <a
        href="/problems/maximum-profit-from-trading-stocks/"
        class="next-challenge-btn__L_19 M__1OuS"
        data-question-title-slug="maximum-profit-from-trading-stocks"
    >
        <span title="Maximum Profit From Trading Stocks">Maximum Profit From Trading Stocks</span>
    </a>
</div>
 */
}
