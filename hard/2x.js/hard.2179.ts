class FenwickTree {
    private size: number;
    private tree: number[];

    constructor(size: number) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0);
    }

    update(index: number, delta: number): void {
        while (index <= this.size) {
            this.tree[index] += delta;
            index += index & -index;
        }
    }

    query(index: number): number {
        let res = 0;
        while (index > 0) {
            res += this.tree[index];
            index -= index & -index;
        }
        return res;
    }
}

function goodTriplets(nums1: number[], nums2: number[]): number {
    const n = nums1.length;

    // Создаем массивы позиций
    const elements = Array.from({ length: n }, () => ({ pos1: -1, pos2: -1 }));

    // Создаем массив элементов с их позициями в обоих массивах
    for (let i = 0; i < n; i++) {
        elements[nums1[i]].pos1 = i + 1;
        elements[nums2[i]].pos2 = i + 1;
    }

    // Сортируем элементы по pos1
    elements.sort((a, b) => a.pos1 - b.pos1);

    // Инициализируем Fenwick Trees
    const leftFT = new FenwickTree(n);
    const rightFT = new FenwickTree(n);

    // Заполняем rightFT всеми элементами изначально
    for (const e of elements) {
        rightFT.update(e.pos2, 1);
    }

    let total = 0;

    for (const e of elements) {
        // Удаляем текущий элемент из rightFT (так как он больше не справа)
        rightFT.update(e.pos2, -1);

        // Количество элементов слева с меньшим pos2
        const leftCount = leftFT.query(e.pos2 - 1);

        // Количество элементов справа с большим pos2
        const rightCount = rightFT.query(n) - rightFT.query(e.pos2);

        total += leftCount * rightCount;

        // Добавляем текущий элемент в leftFT
        leftFT.update(e.pos2, 1);
    }

    return total;
}

console.log(goodTriplets([2, 0, 1, 3], [0, 1, 2, 3]));
console.log(goodTriplets([4, 0, 1, 3, 2], [4, 1, 0, 2, 3]));
