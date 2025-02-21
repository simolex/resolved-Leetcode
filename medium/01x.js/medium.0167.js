/**
 * 167. Two Sum II - Input Array Is Sorted
 *
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let n = numbers.length;

    const search = (at, value) => {
        let l = at;
        let r = n;
        let m;

        while (l < r) {
            m = l + Math.ceil((r - l) / 2);
            if (numbers[m] <= value) {
                l = m;
            } else {
                r = m - 1;
            }
        }
        return l;
    };

    let j, k;
    for (let i = 0; i < n - 1; i++) {
        k = target - numbers[i];
        j = search(Math.max(i + 1, j), k);
        if (numbers[j] === k) return [i + 1, j + 1];
    }
};

// Version #2
var twoSum = function (numbers, target) {
    let sum;
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
        sum = numbers[l] + numbers[r];

        if (sum === target) return [l + 1, r + 1];
        else if (sum > target) r--;
        else l++;
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
