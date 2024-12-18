/**
 * 1475. Final Prices With a Special Discount in a Shop
 *
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    if (prices.length === 1) {
        return prices;
    }

    const stack = [];
    const buffer = [];

    let i = 0;
    stack.push(i++);

    while (i < prices.length) {
        while (i < prices.length && prices[i - 1] < prices[i]) {
            stack.push(i);
            i++;
        }
        if (stack.length > 0) {
            const discont = prices[i];

            while (stack.length > 0) {
                const indexOrder = stack.pop();

                if (prices[indexOrder] >= discont) {
                    prices[indexOrder] -= discont;
                } else {
                    buffer.push(indexOrder);
                }
            }

            while (buffer.length > 0) {
                stack.push(buffer.pop());
            }

            stack.push(i);
            i++;
        }
    }

    return prices;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));
console.log(finalPrices([8, 7, 4, 2, 8, 1, 7, 7, 10, 1]));
