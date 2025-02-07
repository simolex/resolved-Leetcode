/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
    let n = mountainArr.length();

    const getPeakIndex = (mountainArr) => {
        let l = 0;
        let r = n;
        let m;

        while (l < r) {
            m = l + ((r - l) >> 1);
            if (mountainArr.get(m + 1) > mountainArr.get(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    };

    const searchToUp = (l, r, target) => {
        let m;

        while (l < r) {
            m = l + ((r - l) >> 1);
            if (mountainArr.get(m) >= target) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        return mountainArr.get(l) === target ? l : Infinity;
    };

    const searchToDown = (l, r, target) => {
        let m;

        while (l < r) {
            m = l + ((r - l) >> 1);
            if (mountainArr.get(m) > target) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return mountainArr.get(l) === target ? l : Infinity;
    };

    let peak = getPeakIndex(mountainArr);
    const index = Math.min(searchToUp(0, peak, target), searchToDown(peak + 1, n, target));

    return index < Infinity ? index : -1;
};

console.log(findInMountainArray(3, new MountainArray([1, 2, 3, 4, 5, 3, 1])));
console.log(findInMountainArray(3, new MountainArray([0, 1, 2, 4, 2, 1])));
console.log(findInMountainArray(1, new MountainArray([0, 5, 3, 1])));

function MountainArray(arr) {
    this.array = arr;

    this.get = function (index) {
        return this.array[index];
    };

    this.length = function () {
        return this.array.length;
    };
}
