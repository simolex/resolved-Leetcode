/**
 * 1207. Unique Number of Occurrences
 *
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
    const mapNums = new Map();
    const setCounts = new Set();

    arr.forEach((v) => {
        if (!mapNums.has(v)) {
            mapNums.set(v, { cnt: 0 });
        }
        mapNums.get(v).cnt++;
    });

    for (let num of mapNums.values()) {
        if (setCounts.has(num.cnt)) {
            return false;
        }
        setCounts.add(num.cnt);
    }

    return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
