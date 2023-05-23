const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const switchOperation(n)

rl.on("line", (line) => {
    const n = Number(line);
    let N = 1;
    const oper1 = [1];
    while (N < n) {
        if (N * 3 < n) {
            N *= 3;
            oper1.push(N);
            continue;
        }
        if (N * 2 < n) {
            N *= 2;
            oper1.push(N);
            continue;
        }
        N += 1;
        oper1.push(N);
    }

    const operCount = oper.length - 1;
    console.log(operCount);

    const result = oper.join(" ");
    console.log(result);
    rl.close();
});
