/**
 * 146. LRU Cache
 *
 * @param {number} capacity
 */
var Node = function (key, value, next = null, prev = null) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
};

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.hash = new Map();
    this.head = new Node(-1, -1, new Node(-1, -1));
    this.tail = this.head.next;
    this.tail.prev = this.head;
    this.size = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.hash.has(key)) return -1;

    const node = this.hash.get(key);
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    const firstNode = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = firstNode;
    firstNode.prev = node;

    return this.hash.get(key).value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (!this.hash.has(key)) {
        if (this.size !== this.capacity) {
            const next = this.head.next;
            this.head.next = new Node(key, value, next, this.head);
            this.hash.set(key, this.head.next);
            next.prev = this.head.next;
            this.size++;
        } else {
            this.hash.delete(this.tail.prev.key);
            this.hash.set(key, this.tail.prev);
            this.tail.prev.key = key;
            this.tail.prev.value = value;

            const node = this.tail.prev;
            this.tail.prev = node.prev;
            node.prev.next = this.tail;

            const next = this.head.next;
            this.head.next = node;
            node.next = next;
            node.prev = this.head;
            next.prev = node;
        }
    } else {
        const node = this.hash.get(key);
        node.value = value;
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        const firstNode = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = firstNode;
        firstNode.prev = node;
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2);
obj.put(2, 1);
obj.put(2, 2);
console.log(obj.get(2));
obj.put(1, 1);
obj.put(4, 1);
console.log(obj.get(2));
