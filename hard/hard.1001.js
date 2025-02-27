/**
 * 1001. Grid Illumination
 *
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
var gridIllumination = function (n, lamps, queries) {
    const adjacents = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1]
    ];
    const hashLamps = new Map(); // лампы
    const hIlluminations = new Map(); // горизонтали
    const vIlluminations = new Map(); // вертикали
    const dIlluminations = new Map(); // диагонали
    const bdIlluminations = new Map(); // обратные диагонали

    lamps.forEach(([i, j]) => {
        hashLamps.has(i) || hashLamps.set(i, new Set());
        if (!hashLamps.get(i).has(j)) {
            hashLamps.get(i).add(j);
            hIlluminations.set(i, -~hIlluminations.get(i));
            vIlluminations.set(j, -~vIlluminations.get(j));
            dIlluminations.set(i + j, -~dIlluminations.get(i + j));
            bdIlluminations.set(i - j, -~bdIlluminations.get(i - j));
        }
    });

    const decrement = (map, hash) => {
        map.set(hash, map.get(hash) - 1);
        if (map.get(hash) === 0) {
            map.delete(hash);
        }
    };

    const turnOffLamps = (i, j) => {
        if (i >= 0 && i < n && j >= 0 && j < n && hashLamps.has(i) && hashLamps.get(i).has(j)) {
            hashLamps.get(i).delete(j);

            decrement(hIlluminations, i);
            decrement(vIlluminations, j);
            decrement(dIlluminations, i + j);
            decrement(bdIlluminations, i - j);
        }
    };

    return queries.map(([i, j]) => {
        const result =
            hIlluminations.has(i) || vIlluminations.has(j) || dIlluminations.has(i + j) || bdIlluminations.has(i - j)
                ? 1
                : 0;

        turnOffLamps(i, j);
        adjacents.forEach(([di, dj]) => {
            di += i;
            dj += j;
            turnOffLamps(di, dj);
        });
        return result;
    });
};

console.log(
    gridIllumination(
        5,
        [
            [0, 0],
            [4, 4]
        ],
        [
            [1, 1],
            [1, 0]
        ]
    )
);
console.log(
    gridIllumination(
        5,
        [
            [0, 0],
            [4, 4]
        ],
        [
            [1, 1],
            [1, 1]
        ]
    )
);
console.log(
    gridIllumination(
        5,
        [
            [0, 0],
            [0, 4]
        ],
        [
            [0, 4],
            [0, 1],
            [1, 4]
        ]
    )
);
console.log(
    gridIllumination(
        5,
        [
            [0, 0],
            [0, 4]
        ],
        [
            [1, 1],
            [0, 0],
            [2, 2]
        ]
    )
);
console.log(
    gridIllumination(
        6,
        [
            [2, 5],
            [4, 2],
            [0, 3],
            [0, 5],
            [1, 4],
            [4, 2],
            [3, 3],
            [1, 0]
        ],
        [
            [4, 3],
            [3, 1],
            [5, 3],
            [0, 5],
            [4, 4],
            [3, 3]
        ]
    )
);
