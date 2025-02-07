/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length;
    let m;

    while (l < r) {
        m = l + ((r - l) >> 1);
        if (arr[m + 1] > arr[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
