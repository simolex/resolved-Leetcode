/**
 * 1726. Tuple with Same Product
 *
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
    let n = nums.length;
    const halfTulpe = new Map();
    let maxCountPairs = 0;
    let Cn = [0, 1];
    let count = 0;

    let product;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            product = nums[i] * nums[j];

            if (!halfTulpe.has(product)) {
                halfTulpe.set(product, []);
            }
            halfTulpe.get(product).push([nums[i], nums[j]]);
        }
    }

    // Находим максимальное количество пар
    for (let products of halfTulpe.values()) {
        maxCountPairs = Math.max(maxCountPairs, products.length);
    }

    // Предпосчет количества сочетаний для пар
    for (let f = 2; f <= maxCountPairs; f++) {
        Cn[f] = (f * (f - 1)) / 2;
    }

    //Подсчет возможных комбинаций
    for (let products of halfTulpe.values()) {
        if (products.length > 1) {
            count += Cn[products.length] * 8;
        }
    }
    return count;
};

console.log(tupleSameProduct([2, 3, 4, 6]));
console.log(tupleSameProduct([1, 2, 4, 5, 10]));
console.log(tupleSameProduct([2, 3, 4, 6, 8, 12]));
console.log(tupleSameProduct([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]));
