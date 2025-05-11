class DSU {
    parent;
    weight;
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.weight = Array(n).fill(1);
    }

    find(v) {
        while (this.parent[v] !== v) {
            this.parent[v] = this.parent[this.parent[v]]; // Path compression
            v = this.parent[v];
        }
        return v;

        return this.parent[v] === v ? v : (this.parent[v] = this.find(this.parent[v]));
    }

    union(a, b) {
        a = this.find(a);
        b = this.find(b);
        if (this.weight[a] > this.weight[b]) {
            [a, b] = [b, a];
        }
        this.weight[b] += this.weight[a];
        this.parent[a] = b;
    }

    size(v) {
        v = this.find(v);
        return this.weight[v];
    }
}
