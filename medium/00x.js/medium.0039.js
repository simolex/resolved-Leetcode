/**
 * 39. Combination Sum
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let n = candidates.length;
    const result = [];
    const current = [];

    const nextCandidate = (sum = 0, index = 0) => {
        if (sum === target) {
            result.push([...current]);
            return;
        }
        if (index === n || sum > target) {
            return;
        }

        let count = 0;
        let offsetSum = sum;
        let currentCanditate = candidates[index];

        nextCandidate(sum, index + 1);
        while (offsetSum + currentCanditate <= target) {
            offsetSum += currentCanditate;
            current.push(currentCanditate);
            nextCandidate(offsetSum, index + 1);
            count++;
        }
        current.length -= count;
    };

    nextCandidate();
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
