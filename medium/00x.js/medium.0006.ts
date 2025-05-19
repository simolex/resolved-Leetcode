/**
 * 6. Zigzag Conversion
 */
function convert(s: string, numRows: number): string {
    const len = s.length;
    const step = (numRows - 1) * 2;
    const indeces: number[] = [];
    let result = "";

    if (numRows > 1) {
        for (let i = 0; i < len; i += step) {
            result += s[i];
            indeces.push(i + 1);
            indeces.push(i + step - 1);
        }

        for (let k = 1; k < numRows; k++) {
            for (let i = 0; i < indeces.length; i += 2) {
                const left = indeces[i];
                const right = indeces[i + 1];

                if (left > 0 && left < len && left === right) {
                    result += s[left];
                    continue;
                }
                if (left < len && left > 0) {
                    result += s[left];
                }
                indeces[i]++;

                if (right < len) {
                    result += s[right];
                }
                indeces[i + 1]--;
            }
        }
    } else {
        result = s;
    }
    return result;
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
