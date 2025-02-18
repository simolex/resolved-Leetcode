/**
 * 2375. Construct Smallest Number From DI String
 *
 * @param {string} pattern
 * @return {string}
 */
const bitMap = [];
for (let i = 0; i < 9; i++) {
    bitMap[i + 1] = 1 << i;
}

var smallestNumber = function (pattern) {
    const n = pattern.length;
    let ans = [];
    const nextStep = (index = 0, used = 0, result, prev) => {
        if (index === n && !ans.length) {
            ans.push(...result);
        }

        if (index < n) {
            if (pattern[index] === "I") {
                for (let i = prev + 1; i <= 9 && !ans.length; i++) {
                    if (!(used & bitMap[i])) {
                        used |= bitMap[i];
                        result.push(i);
                        nextStep(index + 1, used, result, i);
                        result.pop();
                        used &= ~bitMap[i];
                    }
                }
            } else {
                for (let i = prev - 1; i > 0 && !ans.length; i--) {
                    if (!(used & bitMap[i])) {
                        used |= bitMap[i];
                        result.push(i);
                        nextStep(index + 1, used, result, i);
                        result.pop();
                        used &= ~bitMap[i];
                    }
                }
            }
        }
    };

    let bits = 0;
    let result = [0];
    for (let i = 1; i <= 9 && !ans.length; i++) {
        bits |= bitMap[i];
        result[0] = i;
        nextStep(0, bits, result, i);
        bits &= ~bitMap[i];
    }

    return ans.join("");
};

console.log(smallestNumber("IIIDIDDD"));
console.log(smallestNumber("DDD"));
