/**
 * 1399. Count Largest Group
 */
var countLargestGroup = (n: number): number => {
    const sums = new Map<number, number>();
    let max = 0;
    let result = 0;

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let rest = i;
        while (rest) {
            sum += rest % 10;
            rest = Math.floor(rest / 10);
        }
        sums.set(sum, (sums.get(sum) || 0) + 1);
        max = Math.max(max, sums.get(sum) || 0);
    }

    sums.forEach((cnt) => cnt === max && result++);
    return result;
};

var countLargestGroup = (n: number): number => {
    const sums = Array(5 * 9 + 1).fill(0);
    let max = 0;

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let rest = i;
        while (rest) {
            sum += rest % 10;
            rest = Math.floor(rest / 10);
        }
        sums[sum]++;
        max = Math.max(max, sums[sum]);
    }

    let result = sums.reduce((res, cnt) => res + Number(cnt === max), 0);
    return result;
};

console.log(countLargestGroup(13));
console.log(countLargestGroup(2));
