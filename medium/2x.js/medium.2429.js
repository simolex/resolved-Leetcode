/**
 * 2429. Minimize XOR
 *
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
    const countingBit = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num = num >>> 1;
        }
        return count;
    };

    const countOnes1 = countingBit(num1);
    const countOnes2 = countingBit(num2);

    let gap = Math.abs(countOnes1 - countOnes2);
    let avaliablePlace = 1;

    if (countOnes2 <= countOnes1) {
        while (gap-- > 0) {
            while ((num1 & avaliablePlace) === 0) {
                avaliablePlace = avaliablePlace << 1;
            }
            num1 &= ~avaliablePlace;
        }
        return num1;
    }

    while (gap-- > 0) {
        while ((num1 & avaliablePlace) > 0) {
            avaliablePlace = avaliablePlace << 1;
        }
        num1 |= avaliablePlace;
    }
    return num1;
};

// console.log(minimizeXor(3, 5));
// console.log(minimizeXor(1, 12));
console.log(minimizeXor(91, 18));
