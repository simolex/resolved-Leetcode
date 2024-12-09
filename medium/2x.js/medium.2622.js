/**
 * 2622. Cache With Time Limit
 */

var TimeLimitedCache = function () {
    this.dictionary = new Map();
    this.handle = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const status = this.dictionary.has(key);
    this.dictionary.set(key, value);
    if (this.handle.has(key)) clearTimeout(this.handle.get(key));
    this.handle.set(
        key,
        setTimeout(() => {
            this.dictionary.delete(key);
        }, duration)
    );
    return status;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    // const result = this.dictionary.get(key);
    return this.dictionary.get(key) || -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    return this.dictionary.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
