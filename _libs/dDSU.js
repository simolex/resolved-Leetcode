class DynamicDSU {
    constructor() {
        this.parent = new Map(); // Хранит родителя элемента
        this.rank = new Map(); // Хранит ранг (глубину) дерева
    }

    // Находит корень элемента с path compression
    find(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.rank.set(x, 1);
            return x;
        }
        if (this.parent.get(x) !== x) {
            this.parent.set(x, this.find(this.parent.get(x))); // Сжатие пути
        }
        return this.parent.get(x);
    }

    // Объединяет два множества по рангу
    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        if (x === y) return; // Уже в одном множестве

        // Объединение по рангу (меньшее дерево подвешивается к большему)
        if (this.rank.get(x) < this.rank.get(y)) {
            this.parent.set(x, y);
        } else {
            this.parent.set(y, x);
            if (this.rank.get(x) === this.rank.get(y)) {
                this.rank.set(x, this.rank.get(x) + 1);
            }
        }
    }

    // Проверяет, находятся ли два элемента в одном множестве
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
}
