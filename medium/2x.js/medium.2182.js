/**
 * 2182. Construct String With Repeat Limit
 *
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
    let len = s.length;
    let sortedChars = s.split("");

    sortedChars.sort((a, b) => b[0].localeCompare(a[0]));
    // console.log(sortedChars.join(""));

    let current;
    let right = 0;
    for (let left = 0; left < len; left++) {
        while (right < len && sortedChars[left] === sortedChars[right]) {
            right++;
        }
        while (
            right <= len &&
            left + repeatLimit < right &&
            Math.floor((right - left) / repeatLimit) > 0
        ) {
            left += repeatLimit;
            if (right >= len) {
                len = left;
            } else {
                if (left !== right) {
                    current = sortedChars[left];
                    sortedChars[left] = sortedChars[right];
                    sortedChars[right] = current;
                    right++;
                    left++;
                } else {
                    left--;
                }
            }
        }
    }

    // console.log(len, right, sortedChars);
    return sortedChars.slice(0, len).join("");
};

console.log(repeatLimitedString("cczazcc", 3));
console.log(repeatLimitedString("aababab", 2));
console.log(repeatLimitedString("cczazcc", 3));
console.log(repeatLimitedString("robnsdvpuxbapuqgopqvxdrchivlifeepy", 2));
console.log(repeatLimitedString("bsulbcsxe", 1));
console.log(
    repeatLimitedString("xyutfpopdynbadwtvmxiemmusevduloxwvpkjioizvanetecnuqbqqdtrwrkgt", 1)
);

console.log(
    repeatLimitedString(
        "bplpcfifosybmjxphbxdltxtfrjspgixoxzbpwrtkopepjxfooazjyosengdlvyfchqhqxznnhuuxhtbrojyhxwlsrklsryvmufoibgfyxgjw",
        1
    )
);
console.log(
    "zyzyzyxyxyxyxwxwxwxvxvxuxututststsrsrsrqrqrpopopopopopopononmnmlklkljljljijijijhghghghghfhfefefdfdfcfcbab",
    "<<"
);
