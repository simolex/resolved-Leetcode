/**
 * @param {number} n
 * @return {number[]}
 */
const prefix = {};
const getResult = (n) => {
    let nextPosition;
    let maxSizeResult = 2 * n - 1;
    const resultState = Array(maxSizeResult).fill(0);
    const bitMap = [];
    for (let b = 0; b < n; b++) {
        bitMap[b + 1] = 1 << b;
    }

    const nextStep = (position = 0, mask = 0, step = 0) => {
        for (let i = n; i > 0; i--) {
            if (i > 1 && (position + i >= maxSizeResult || resultState[position + i] !== 0)) {
                continue;
            }

            if (!(mask & bitMap[i])) {
                nextPosition = position + 1;

                resultState[position] = i;
                if (i > 1) resultState[position + i] = i;

                while (resultState[nextPosition] > 0) nextPosition++;

                if (step < n - 1) {
                    if (nextStep(nextPosition, mask | bitMap[i], step + 1)) return true;
                } else {
                    return true;
                }

                resultState[position] = 0;
                if (i > 1) resultState[position + i] = 0;
            }
        }
        return false;
    };

    nextStep();
    return resultState;
};
// грязный хак для leetcode
for (let k = 1; k <= 20; k++) {
    prefix[k] = getResult(k);
}

var constructDistancedSequence = function (n) {
    return prefix[n];
};

console.log(constructDistancedSequence(3));
console.log(constructDistancedSequence(4));
console.log(constructDistancedSequence(5));
