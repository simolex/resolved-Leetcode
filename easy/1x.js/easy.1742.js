/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    const hash = new Map();
    const boxes = new Map();

    const getIndex = (tail) => {
        if (tail === 0) return 0;

        if (hash.has(tail)) return hash.get(tail);

        let index = tail % 10;
        index += getIndex((tail / 10) | 0);
        hash.set(tail, index);
        return index;
    };

    let index;
    let max = 0;
    for (let i = lowLimit; i <= highLimit; i++) {
        index = getIndex(i);
        boxes.set(index, -~boxes.get(index));
        max = Math.max(max, boxes.get(index));
    }
    return max;
};

console.log(countBalls(1, 10));
console.log(countBalls(5, 15));
console.log(countBalls(19, 28));
console.log(countBalls(209, 272));
