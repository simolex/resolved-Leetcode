/**
 * 901. Online Stock Span
 */
var StockSpanner = function () {
    this.stack = [{ price: Infinity, index: 0 }];
    this.index = 0;
};

StockSpanner.prototype.peek = function () {
    return this.stack.length ? this.stack[this.stack.length - 1] : { price: Infinity };
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
    let lastElement;
    while ((lastElement = this.peek()).price <= price) {
        this.stack.pop();
    }

    this.index++;
    this.stack.push({ price, index: this.index });
    return this.index - lastElement.index;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
