/**
 * 1295. Find Numbers with Even Number of Digits
 */
function findNumbers(nums: number[]): number {
    return nums.reduce((count, n) => count - (Math.ceil(Math.log10(n)) % 2) + 1, 0);
}

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
