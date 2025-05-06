function numEquivDominoPairs(dominoes: number[][]): number {
    const set = new Map();

    for (let i = 0; i < dominoes.length; i++) {
        const [first, second] = dominoes[i];
        const key = first > second ? `${first}~${second}` : `${second}~${first}`;
        set.set(key, -~set.get(key));
    }
    return [...set.values()].reduce((cnt, n) => cnt + (n * (n - 1)) / 2, 0);
}

console.log(
    numEquivDominoPairs([
        [1, 2],
        [2, 1],
        [3, 4],
        [5, 6],
    ])
);
console.log(
    numEquivDominoPairs([
        [1, 2],
        [1, 2],
        [1, 1],
        [1, 2],
        [2, 2],
    ])
);
