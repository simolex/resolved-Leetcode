/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    const current = [];
    const nextDigit = (start = 1, size = 0) => {
        if (size === k) {
            result.push([...current]);
            return;
        }
        for (let i = start; i <= n; i++) {
            current.push(i);
            nextDigit(i + 1, size + 1);
            current.pop();
        }
    };

    nextDigit();
    return result;
};

console.log(combine(4, 2));
console.log(combine(1, 1));
