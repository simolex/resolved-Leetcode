/**
 * 2337. Move Pieces to Obtain a String
 *
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
    const startArray = start
        .split("")
        .map((piece, idx) => ({ piece, idx }))
        .filter(({ piece }) => piece !== "_");
    const targetArray = target
        .split("")
        .map((piece, idx) => ({ piece, idx }))
        .filter(({ piece }) => piece !== "_");

    if (startArray.length !== targetArray.length) {
        return false;
    }
    for (let i = 0; i < startArray.length; i++) {
        if (startArray[i].piece === targetArray[i].piece) {
            if (startArray[i].piece === "L" && startArray[i].idx < targetArray[i].idx) {
                return false;
            }
            if (startArray[i].piece === "R" && startArray[i].idx > targetArray[i].idx) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

console.log(canChange("_L__R__R_", "L______RR"));
console.log(canChange("R_L_", "__LR"));
console.log(canChange("_R", "R_"));
