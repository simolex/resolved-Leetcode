/**
 * 394. Decode String
 *
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let backets = [];
    let current;
    const regDigit = /[0-9]/;
    return s.split("").reduce((stack, t) => {
        if (regDigit.test(t)) {
            current = stack.pop();
            if (/[0-9]+/.test(current)) {
            }
        } else {
        }
        return stack;
    }, []);
};
