/**
 * 2094. Finding 3-Digit Even Numbers
 */
// console.log(freqDigits);

function findEvenNumbers(digits: number[]): number[] {
    const result: number[] = [];
    const freqDigits = Array(10).fill(0);
    for (const digit of digits) {
        freqDigits[digit]++;
    }

    let current: number[];
    let isGood: boolean;
    for (let i = 100; i < 1000; i += 2) {
        current = i.toString().split("").map(Number);
        isGood = true;
        for (const c of current) {
            freqDigits[c]--;
            if (freqDigits[c] < 0) isGood = false;
        }

        if (isGood) result.push(i);

        for (const c of current) {
            freqDigits[c]++;
        }
    }

    return result;
}

console.log(findEvenNumbers([2, 1, 3, 0]));
console.log(findEvenNumbers([2, 2, 8, 8, 2]));
console.log(findEvenNumbers([3, 7, 5]));
