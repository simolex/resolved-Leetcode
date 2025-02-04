/**
 * 2100. Find Good Days to Rob the Bank
 *
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
    let n = security.length;
    let result = [];

    const suffix = [0];
    const prefix = [0];
    for (let i = 1; i < n; i++) {
        suffix.push(suffix[suffix.length - 1] + (security[i - 1] > security[i] ? 1 : 0));
        prefix.push(prefix[prefix.length - 1] + (security[i - 1] < security[i] ? 1 : 0));
    }

    for (let i = time; i < n - time; i++) {
        if (i >= time && prefix[i] === prefix[i - time] && suffix[i + time] === suffix[i]) {
            result.push(i);
        }
    }

    return result;
};

console.log(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2], 2));
console.log(goodDaysToRobBank([1, 1, 1, 1, 1], 0));
console.log(goodDaysToRobBank([1, 2, 3, 4, 5, 6], 2));
console.log(goodDaysToRobBank([1, 2, 3, 4], 0));
console.log(goodDaysToRobBank([1, 2, 5, 4, 1, 0, 2, 4, 5, 3, 1, 2, 4, 3, 2, 4, 8], 2));
