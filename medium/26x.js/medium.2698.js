/**
 * 2698. Find the Punishment Number of an Integer
 *
 * @param {number} n
 * @return {number}
 */
const prefixQuad = [0];
const isValid = (num, sum = 0, tail = num * num) => {
    if (num === sum + tail) {
        return true;
    }

    let left = tail;
    let right = 0;
    let pattern = 1;
    while (left > 0) {
        right += (left % 10) * pattern;
        left = Math.floor(left / 10);

        if (left > 0) {
            if (isValid(num, sum + left, right)) return true;
        } else if (num === sum + right + left) {
            return true;
        }

        pattern *= 10;
    }
    return false;
};

for (let i = 1; i <= 1000; i++) {
    if (isValid(i)) {
        prefixQuad.push(prefixQuad[prefixQuad.length - 1] + i * i);
    } else {
        prefixQuad.push(prefixQuad[prefixQuad.length - 1]);
    }
}

var punishmentNumber = function (n) {
    return prefixQuad[n];
};

console.log(punishmentNumber(10));
console.log(punishmentNumber(37));
