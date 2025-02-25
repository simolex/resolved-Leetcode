/**
 * 2467. Most Profitable Path in a Tree
 *
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
    const stack = [];
    const state = {
        untracked: -1,
        tracked: 0,
        opened: 1,
    };
    let n = amount.length;
    const graph = new Map(Array.from({ length: n }, (_, i) => [i, new Set()]));
    const parents = Array(n).fill(-1);
    const visited = Array(n).fill(state.untracked);

    let v1, v2;
    for (let edge of edges) {
        [v1, v2] = edge;
        graph.get(v1).add(v2);
        graph.get(v2).add(v1);
    }

    // Определяем структуру дерева для обоих и родительских узлов для Боба
    let current;
    stack.push(0);
    visited[0] = state.tracked;
    while (stack.length) {
        current = stack.pop();
        visited[current] = state.tracked;
        graph.get(current).forEach((child) => {
            if (visited[child] === state.untracked) {
                stack.push(child);
                parents[child] = current;
            }
        });
    }

    let isLeaf, profit;
    let pntStack = 0;
    let posAlise = 0;
    let posBob = bob;
    let netIncome = posAlise !== posBob ? amount[posAlise] : amount[posAlise] / 2;

    // Помещаем игроков на исходные позиции
    stack.push(0, netIncome);
    visited[posAlise] = state.opened;
    visited[posBob] = state.opened;

    // Начинаем игру
    let maxNetIncome = -Infinity;
    while (pntStack < stack.length) {
        // Выбираем следующий ход для Боба
        if (parents[posBob] >= 0) {
            posBob = parents[posBob];
        }

        current = stack.length;
        // Перебираем доступные пути для Алисы
        while (pntStack < current) {
            isLeaf = true;
            posAlise = stack[pntStack++];
            netIncome = stack[pntStack++];
            graph.get(posAlise).forEach((child) => {
                if (parents[posAlise] !== child) {
                    profit = 0;
                    if (visited[child] !== state.opened) {
                        profit = child !== posBob ? amount[child] : amount[child] / 2;
                    }
                    stack.push(child, netIncome + profit);
                    visited[child] = state.opened;
                    isLeaf = false;
                }
            });

            if (isLeaf) {
                maxNetIncome = Math.max(maxNetIncome, netIncome);
            }
        }
        visited[posBob] = state.opened;
    }
    return maxNetIncome;
};

console.log(
    mostProfitablePath(
        [
            [0, 1],
            [1, 2],
            [1, 3],
            [3, 4],
        ],
        3,
        [-2, 4, 2, -4, 6]
    )
);

console.log(mostProfitablePath([[0, 1]], 1, [-7280, 2350]));
