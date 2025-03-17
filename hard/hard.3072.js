/**
 * 3072. Distribute Elements Into Two Arrays II
 *
 * @param {number[]} nums
 * @return {number[]}
 */
class BinaryIndexedTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }

    // Обновление элемента в дереве
    update(index, value) {
        while (index <= this.size) {
            this.tree[index] += value;
            index += index & -index; // Переход к следующему элементу
        }
    }

    // Запрос суммы на префиксе [1, index]
    prefixQuery(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index; // Переход к предыдущему элементу
        }
        return sum;
    }

    // Запрос суммы на отрезке [left, right]
    rangeQuery(left, right) {
        return this.prefixQuery(right) - this.prefixQuery(left - 1);
    }

    // Запрос суммы на диапазоне [index+1, size]
    query(index) {
        return this.prefixQuery(this.size) - this.prefixQuery(index);
    }
}

var resultArray = function (nums) {
    const unique = new Set(nums);
    const factorMap = new Map([...unique].sort((a, b) => a - b).map((v, i) => [v, i + 1]));

    const state = {
        left: {
            tree: new BinaryIndexedTree(factorMap.size),
            map: new Map(),
            arr: [],
        },
        right: {
            tree: new BinaryIndexedTree(factorMap.size),
            map: new Map(),
            arr: [],
        },
    };

    const insertState = (direct, value) => {
        const directState = state[direct];

        directState.map.set(value, -~directState.map.get(value));
        directState.tree.update(factorMap.get(value), 1); // Увеличивем на 1 кол-во
        directState.arr.push(value);
    };

    const getStateSize = (direct) => state[direct].arr.length;

    insertState("left", nums[0]);
    insertState("right", nums[1]);

    let valueIndex, leftCount, rightCount;
    for (let i = 2; i !== nums.length; i++) {
        valueIndex = factorMap.get(nums[i]);
        leftCount = state["left"].tree.query(valueIndex);
        rightCount = state["right"].tree.query(valueIndex);

        if (leftCount > rightCount) {
            insertState("left", nums[i]);
        } else if (leftCount === rightCount) {
            if (getStateSize("left") <= getStateSize("right")) {
                insertState("left", nums[i]);
            } else {
                insertState("right", nums[i]);
            }
        } else {
            insertState("right", nums[i]);
        }
    }

    return state.left.arr.concat(state.right.arr);
};

console.log(resultArray([2, 1, 3, 3]));
console.log(resultArray([5, 14, 3, 1, 2]));
console.log(resultArray([3, 3, 3, 3]));
console.log(
    resultArray([
        47, 79, 40, 17, 71, 35, 82, 51, 7, 4, 9, 4, 15, 80, 93, 36, 86, 39, 33, 98, 64, 18, 66, 66,
        90, 94, 66, 16, 65, 66, 67, 55, 38, 78, 5,
    ])
);
