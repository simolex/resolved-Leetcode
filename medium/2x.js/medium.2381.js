/**
 * 2381. Shifting Letters II
 *
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    const n = s.length;
    const dict = "abcdefghijklmnopqrstuvwxyz";
    const mod = dict.length;
    const indexLetters = new Map();

    dict.split("").forEach((l, i) => {
        indexLetters.set(l, i);
        indexLetters.set(i, l);
    });

    const indexedString = s.split("").map((l) => indexLetters.get(l));

    const preResult = Array(n + 1).fill(0);
    shifts.forEach(([start, end, direction]) => {
        if (direction) {
            preResult[start]++;
            preResult[end + 1]--;
        } else {
            preResult[start]--;
            preResult[end + 1]++;
        }
    });

    const resultShifts = preResult.reduce((p, v) => {
        if (p.length > 0) {
            p.push(p[p.length - 1] + v);
        } else {
            p.push(v);
        }
        return p;
    }, []);

    return indexedString.map((v, i) => indexLetters.get((((v + resultShifts[i]) % mod) + mod) % mod)).join("");
};

console.log(
    shiftingLetters("abc", [
        [0, 1, 0],
        [1, 2, 1],
        [0, 2, 1]
    ])
);

console.log(
    shiftingLetters("dztz", [
        [0, 0, 0],
        [1, 1, 1]
    ])
);

console.log(
    shiftingLetters("aaaa", [
        [0, 0, 0],
        [1, 1, 1]
    ])
);
