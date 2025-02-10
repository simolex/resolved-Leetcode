/**
 * 39. Combination Sum
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let n = candidates.length;
    const result = [];
    const current = [];

    const uniqueCandidates = {};
    for (let i = 0; i < n; i++) {
        uniqueCandidates[candidates[i]] = -~uniqueCandidates[candidates[i]];
    }

    candidates = Object.keys(uniqueCandidates).map(Number);
    n = candidates.length;

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
        while (
            offsetSum + currentCanditate <= target &&
            count < uniqueCandidates[currentCanditate]
        ) {
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

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
