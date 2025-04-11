/**
 * 2843. Count Symmetric Integers
 */

function countSymmetricIntegers(low: number, high: number): number {
    let skipped = 0;
    const skipIfNeedTo = (num: number) => {
        if (num.toString().length % 2 === 1) {
            skipped = 10 ** (num.toString().length + 1);
            return 10 ** num.toString().length;
        }
        skipped = 10 ** num.toString().length;
        return num;
    };

    const initSum = function () {
        const enums = new Map<string, number>([
            ["0", 0],
            ["1", 1],
            ["2", 2],
            ["3", 3],
            ["4", 4],
            ["5", 5],
            ["6", 6],
            ["7", 7],
            ["8", 8],
            ["9", 9],
        ]);
        return (sNum: string): number => {
            if (enums.has(sNum)) {
                return enums.get(sNum) || 0;
            }
            let sum = 0;

            for (let n of sNum) {
                sum += enums.get(n) || 0;
            }
            enums.set(sNum, sum);
            return sum;
        };
    };

    let count = 0;
    low = skipIfNeedTo(low);
    let half = low.toString().length / 2;
    const getSum = initSum();

    for (let i = low; i <= high; i++) {
        const sI = i.toString();

        if (skipped === i) {
            skipped *= 100;
            i *= 10;
            half = i.toString().length / 2;
            continue;
        }
        if (getSum(sI.slice(0, half)) === getSum(sI.slice(-half))) count++;
    }
    return count;
}

console.log(countSymmetricIntegers(1, 100));
console.log(countSymmetricIntegers(1200, 1230));
console.log(countSymmetricIntegers(99, 1782));
