/**
 * 904. Fruit Into Baskets
 *
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    const n = fruits.length;
    const baskets = new Map();

    const add = (value) => {
        if (!baskets.has(value)) {
            baskets.set(value, { cnt: 0 });
        }
        baskets.get(value).cnt++;
    };

    const del = (value) => {
        if (baskets.has(value)) {
            baskets.get(value).cnt--;
            if (baskets.get(value).cnt === 0) {
                baskets.delete(value);
            }
        }
    };

    let right = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        while (right < n && (baskets.size < 2 || (baskets.size === 2 && baskets.has(fruits[right])))) {
            add(fruits[right]);
            right++;
        }
        count = Math.max(count, right - i);
        del(fruits[i]);
    }
    return count;
};

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
