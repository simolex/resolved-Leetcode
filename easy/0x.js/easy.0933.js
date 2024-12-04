/**
 * 933. Number of Recent Calls
 */

var RecentCounter = function () {
    this.pntQueue = 0;
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */

RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while (this.pntQueue < this.queue.length && this.queue[this.pntQueue] < t - 3000) {
        this.pntQueue++;
    }
    return this.queue.length - this.pntQueue;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

var obj = new RecentCounter();
var param_1 = obj.ping(1);
var param_2 = obj.ping(100);
var param_3 = obj.ping(3001);
var param_4 = obj.ping(3002);

console.log(param_1, param_2, param_3, param_4);
