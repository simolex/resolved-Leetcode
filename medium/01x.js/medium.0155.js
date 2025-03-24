var MinStack = function () {
    this.stack = [];
    this.minimums = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);
    this.minimums.push(Math.min(this.minimums.length > 0 ? this.minimums[this.minimums.length - 1] : Infinity, val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minimums.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minimums[this.minimums.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
