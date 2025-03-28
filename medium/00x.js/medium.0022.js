/**
 * 22. Generate Parentheses
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const k = 2 * n;
    const result = [];

    const nextStep = (step = 0, set = "", stack = 0) => {
        if (step === k) {
            if (stack === 0) result.push(set);
            return;
        }

        if (stack < n) {
            nextStep(step + 1, set + "(", stack + 1);
        }
        if (stack > 0) {
            nextStep(step + 1, set + ")", stack - 1);
        }
    };
    nextStep();
    return result;
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(3));
