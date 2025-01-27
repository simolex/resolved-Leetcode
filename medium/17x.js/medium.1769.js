/**
 * 1769. Minimum Number of Operations to Move All Balls to Each Box
 *
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const n = boxes.length;
    const balls = boxes.split("").map(Number);
    const prefix = balls.reduce((p, ballCount) => {
        p.push((!!p.length ? p[p.length - 1] : 0) + ballCount);
        return p;
    }, []);

    const suffix = balls.reduce(
        (p, ballCount) => {
            const res = p[p.length - 1] - ballCount;
            p.push(res);
            return p;
        },
        [prefix[n - 1]]
    );
    console.log(prefix, suffix);
};

var minOperations = function (boxes) {
    const n = boxes.length;
    const distances = new Array(n).fill(0);

    let prefixCount = 0;
    let prefixSum = 0;
    let suffixCount = 0;
    let suffixSum = 0;

    // Calculate prefix sums
    for (let i = 0; i < n; i++) {
        distances[i] = prefixCount * i - prefixSum;
        if (boxes[i] === "1") {
            prefixCount++;
            prefixSum += i;
        }
    }

    // Calculate suffix sums and update the distances array
    for (let i = n - 1; i >= 0; i--) {
        distances[i] += suffixSum - suffixCount * i;
        if (boxes[i] === "1") {
            suffixCount++;
            suffixSum += i;
        }
    }

    return distances;
};

console.log(minOperations("110"));
console.log(minOperations("11011")); //8,6,6,6,8
