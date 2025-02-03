/**
 * 949. Largest Time for Given Digits
 * k
 * @param {number[]} arr
 * @return {string}
 */
function* permuteGenerator(arr) {
    const swap = (a, i, j) => ([a[i], a[j]] = [a[j], a[i]]);
    function* doGenerate(k, heapArr) {
        if (k === 1) {
            yield heapArr.slice();
        } else {
            yield* doGenerate(k - 1, heapArr);
            for (let i = 0; i < k - 1; i++) {
                swap(heapArr, k % 2 ? 0 : i, k - 1);
                yield* doGenerate(k - 1, heapArr);
            }
        }
    }
    yield* doGenerate(arr.length, arr.slice());
}

var largestTimeFromDigits = function (arr) {
    let maxHour = -1;
    let maxMinute = -1;
    let hour, minute;
    let result = "";
    const generator = permuteGenerator(arr);
    for (let permutation of generator) {
        hour = permutation[0] * 10 + permutation[1];
        minute = permutation[2] * 10 + permutation[3];
        if (
            hour < 24 &&
            minute < 60 &&
            (hour > maxHour || (hour === maxHour && minute > maxMinute))
        ) {
            maxHour = hour;
            maxMinute = minute;
            result = permutation.map((v, i) => `${v}${i % 2 > 0 && i < 3 ? ":" : ""}`).join("");
        }
    }
    return result;
};

console.log(largestTimeFromDigits([1, 2, 3, 4]));
console.log(largestTimeFromDigits([5, 5, 5, 5]));
console.log(largestTimeFromDigits([0, 0, 0, 0]));
