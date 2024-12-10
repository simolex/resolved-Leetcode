/**
 * 2722. Join Two Arrays by ID
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const result = [];
    arr1.sort((a, b) => a.id - b.id);
    arr2.sort((a, b) => a.id - b.id);

    let pnt1 = 0;
    let pnt2 = 0;
    while (pnt1 < arr1.length || pnt2 < arr2.length) {
        if (pnt1 < arr1.length && (pnt2 === arr2.length || arr1[pnt1].id <= arr2[pnt2].id)) {
            if (pnt2 < arr2.length && arr1[pnt1].id === arr2[pnt2].id) {
                result.push({ ...arr1[pnt1], ...arr2[pnt2] });
                pnt2++;
            } else {
                result.push(arr1[pnt1]);
            }
            pnt1++;
        } else {
            result.push(arr2[pnt2]);
            pnt2++;
        }
    }
    return result;
};

console.log(
    join(
        [
            { id: 1, x: 1 },
            { id: 3, x: 9 },
        ],
        [{ id: 2, x: 5 }]
    )
);

console.log(
    join(
        [
            { id: 1, x: 2, y: 3 },
            { id: 2, x: 3, y: 6 },
        ],
        [
            { id: 2, x: 10, y: 20 },
            { id: 3, x: 0, y: 0 },
        ]
    )
);
