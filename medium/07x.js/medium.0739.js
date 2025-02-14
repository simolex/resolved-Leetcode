/**
 * 739. Daily Temperatures
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
Array.prototype.peek = function () {
    return this[this.length - 1];
};

var dailyTemperatures = function (temperatures) {
    let n = temperatures.length;
    const stack = [];
    const warmerIndeces = Array(n).fill(0);

    let index;
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && temperatures[stack.peek()] < temperatures[i]) {
            index = stack.pop();
            warmerIndeces[index] = i - index;
        }
        stack.push(i);
    }
    return warmerIndeces;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
