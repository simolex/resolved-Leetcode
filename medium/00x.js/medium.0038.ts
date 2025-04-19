/**
 * 38. Count and Say
 */
const result = Array(30).fill("");
result[0] = "1";

for (let j = 1; j < 30; j++) {
    let current = "";
    let str = result[j - 1];

    let count = 1;
    let prev = str[0];

    for (let i = 1; i < str.length; i++) {
        if (prev === str[i]) {
            count++
        } else {
            current += `${count}${prev}`;
            prev = str[i];
            count = 1;
        }
    }
    current += `${count}${prev}`;
    result[j] = current;
}

function countAndSay(n: number): string {
    return result[n - 1];
};