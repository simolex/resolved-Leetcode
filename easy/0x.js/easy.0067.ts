/**
 * 67. Add Binary
 */
function addBinary(a: string, b: string): string {
    let arrA = a.split("").reverse().map(Number);
    let arrB = b.split("").reverse().map(Number);

    if (a.length < b.length) {
        [arrA, arrB] = [arrB, arrA];
    }
    let numA = arrA.length;
    let numB = arrB.length;
    let upper = 0;
    let idx = 0;

    while ((numA > 0 && numB > 0) || upper) {
        const bitA = arrA[idx] || 0;
        const bitB = arrB[idx] || 0;
        const sum = bitA + bitB + upper;
        arrA[idx] = sum & 1;
        upper = (sum >> 1) & 1;
        idx++;
        numA--;
        numB--;
    }

    return arrA.reverse().join("");
}

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
