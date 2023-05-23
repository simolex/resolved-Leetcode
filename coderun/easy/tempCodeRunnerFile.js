const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    const n = Number(line);
    let N = n;
    const oper = [];
    while (N !== 1) {
        if (N % 3 === 0) {
            N /= 3;
            oper.push((num) => num * 3);
            continue;
        }
        if (N % 2 === 0) {
            N /= 2;
            oper.push((num) => num * 2);
            continue;
        }
        N -= 1;
        oper.push((num) => num + 1);
    }

    const operCount = oper.length;
    console.log(operCount);

    const result = oper
        .reduceRight(
            (res, fn, i) => {
                res.push(fn(res[operCount - i - 1]));
                return res;
            },
            [1]
        )
        .join(" ");
    console.log(result);
    rl.close();
});
