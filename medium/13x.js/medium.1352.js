/**
 * 1352. Product of the Last K Numbers
 */

var ProductOfNumbers = function () {
    this.prefix = [1];
    this.length = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
    if (num > 0) {
        this.prefix.push(this.prefix[this.length++] * num);
    } else {
        this.prefix = [1];
        this.length = 0;
    }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
    if (k <= this.length) {
        return this.prefix[this.length] / this.prefix[this.length - k];
    }
    return 0;
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
