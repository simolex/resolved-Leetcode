/**
 * 3394. Check if Grid can be Cut into Sections
 *
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (m, rectangles) {
    let n = rectangles.length;
    const types = {
        start: 1,
        end: -1
    };

    const vertical = Array(n * 2);
    const horizontal = Array(n * 2);

    let pntVert = 0;
    let pntHoriz = 0;

    let rect;
    for (let i = 0; i < n; i++) {
        rect = rectangles[i];
        vertical[pntVert++] = { coord: rect[0], type: types.start };
        vertical[pntVert++] = { coord: rect[2], type: types.end };
        horizontal[pntHoriz++] = { coord: rect[1], type: types.start };
        horizontal[pntHoriz++] = { coord: rect[3], type: types.end };
    }

    vertical.sort((a, b) => a.coord - b.coord || a.type - b.type);
    horizontal.sort((a, b) => a.coord - b.coord || a.type - b.type);

    let rect_V = 1,
        cuts_V = 0;
    let rect_H = 1,
        cuts_H = 0;
    for (let i = 1; i < 2 * n; i++) {
        if (vertical[i].type === types.start) {
            if (rect_V === 0) cuts_V++;
            rect_V++;
        } else if (vertical[i].type === types.end) {
            rect_V--;
        }

        if (horizontal[i].type === types.start) {
            if (rect_H === 0) cuts_H++;
            rect_H++;
        } else if (horizontal[i].type === types.end) {
            rect_H--;
        }
    }

    return cuts_H >= 2 || cuts_V >= 2;
};

console.log(
    checkValidCuts(5, [
        [1, 0, 5, 2],
        [0, 2, 2, 4],
        [3, 2, 5, 3],
        [0, 4, 4, 5]
    ])
);

console.log(
    checkValidCuts(4, [
        [0, 0, 1, 1],
        [2, 0, 3, 4],
        [0, 2, 2, 3],
        [3, 0, 4, 3]
    ])
);

console.log(
    checkValidCuts(4, [
        [0, 2, 2, 4],
        [1, 0, 3, 2],
        [2, 2, 3, 4],
        [3, 0, 4, 2],
        [3, 2, 4, 4]
    ])
);
