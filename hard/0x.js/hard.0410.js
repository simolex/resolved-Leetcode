/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
    const splitable = (limit) => {
        let sum = 0;
        let count = 1;
        for (let num of nums) {
            if (num > limit) return false;
            if (sum + num > limit) {
                sum = 0;

                count++;
                if (count > k) return false;
            }
            sum += num;
        }
        return true;
    };

    let l = 0;
    let r = 10 ** 9;
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (splitable(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return l;
};

var splitArray = function (nums, k) {
    const splitable = (limit) => {
        let sum = 0;
        let count = 1;
        for (let num of nums) {
            if (sum + num > limit) {
                sum = 0;
                count++;
            }
            sum += num;
        }
        return count;
    };

    let l = Math.max(...nums);
    let r = 10 ** 9;
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (splitable(m) > k) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));
console.log(splitArray([1, 2, 3, 4, 5], 2));
console.log(splitArray([1, 4, 4], 3));
