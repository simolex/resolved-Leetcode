class Trie {
    constructor() {
        this.children = {};
        this.isMemo = false;
    }

    /**
     * @param {string} prefix
     * @return {Trie}
     */
    _contains(prefix) {
        let node = this;
        for (let char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word, result) {
        let node = this;
        for (let char of word) {
            node.children[char] || (node.children[char] = new Trie());
            node = node.children[char];
        }
        node.isMemo = true;
        node.result = result;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this._contains(word);
    }
}

/**
 * 2630. Memoize II
 *
 * Version #1
 *
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let mapperIndex = 0;
    const mappedKeys = new Map();
    const getMappedKey = (key) => {
        if (mappedKeys.has(key)) {
            return mappedKeys.get(key);
        }
        mappedKeys.set(key, ++mapperIndex);
        return mapperIndex;
    };

    let mappedKey, hashedKey;
    const memo = new Trie();

    return function (...args) {
        mappedKey = args.map(getMappedKey);
        hashedKey = memo.search(mappedKey);
        if (hashedKey.isMemo) return hashedKey.result;

        const result = fn(...args);

        memo.insert(mappedKey, result);
        return result;
    };
}

/**
 * Version #2 (without MapperIndex)
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const memo = new Map();

    return function (...args) {
        let node = memo;

        for (let arg of args) {
            node.has(arg) || node.set(arg, new Map());
            node = node.get(arg);
        }

        if (node.has("savedResult")) {
            return node.get("savedResult");
        }

        const result = fn(...args);
        node.set("savedResult", result);
        return result;
    };
}
/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *     callCount += 1;
 *     return a + b;
 * });
 * memoizedFn(2, 3); // 5
 * memoizedFn(2, 3); // 5
 * console.log(callCount); // 1
 */
