function largestGoodInteger(num: string): string {
    let n = num.length;
    let left = 0;
    let max = "";
    for (let right = 0; right < n; right++) {
        if (num[left] !== num[right]) {
            left = right;
        }
        if (right - left >= 2 && num[left] > max) {
            max = num[left];
        }
    }
    return max.repeat(3);
};

console.log(largestGoodInteger("6777133339"));
console.log(largestGoodInteger("2300019"));
console.log(largestGoodInteger("42352338"));
