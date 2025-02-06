/**
 * 3265. Count Almost Equal Pairs I
 *
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function (nums) {
    let n = nums.length;
    const pairs = new Map();
    let pattern = Array(10).fill(0);
    let hash;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 10; j++) {
            pattern[j] = 0;
        }

        for (let char of nums[i].toString()) {
            pattern[char]++;
        }

        hash = JSON.stringify(pattern.slice(1));

        pairs.has(hash) || pairs.set(hash, []);
        pairs.get(hash).push(nums[i]);
    }

    let strNum1, strNum2;
    let fixedNum1, fixedNum2;

    const isAlmostEqual = (str1, str2) => {
        let saveN1, saveN2;
        let isSwaped = false;
        for (let k = 0; k < str1.length; k++) {
            if (str1[k] !== str2[k]) {
                if (!saveN1) {
                    saveN1 = str1[k];
                    saveN2 = str2[k];
                } else if (!isSwaped) {
                    if (saveN1 !== str2[k] || saveN2 !== str1[k]) {
                        return false;
                    }
                    isSwaped = true;
                } else {
                    return false;
                }
            }
        }
        return true;
    };

    let count = 0;
    for (let list of pairs.values()) {
        let m = list.length;

        if (m > 1) {
            for (let i = 0; i < m; i++) {
                strNum1 = list[i].toString();
                for (let j = i + 1; j < m; j++) {
                    strNum2 = list[j].toString();
                    if (strNum1.length !== strNum2.length) {
                        fixedNum1 = strNum1.padStart(Math.max(strNum1.length, strNum2.length), "0");
                        fixedNum2 = strNum2.padStart(fixedNum1.length, "0");
                    } else {
                        fixedNum1 = strNum1;
                        fixedNum2 = strNum2;
                    }
                    if (isAlmostEqual(fixedNum1, fixedNum2)) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
};

console.log(countPairs([3, 12, 30, 17, 21]));
console.log(countPairs([1, 1, 1, 1, 1]));
console.log(countPairs([123, 231]));
