/**
 * 2695. Array Wrapper
 *
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this._nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    return this._nums.reduce((sum, v) => sum + v, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    return `[${this._nums.join(",")}]`;
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
