/**
 * 838. Push Dominoes
 */

function pushDominoes(dominoes: string): string {
    const n = dominoes.length;
    const forces = Array(n).fill(0);

    let currentForR = 0;
    let currentForL = 0;
    for (let i = 0; i < n; i++) {
        if (dominoes[i] === "R") currentForR = n;
        else if (currentForR > 0 && dominoes[i] === ".") currentForR--;
        else {
            currentForR = 0;
        }
        forces[i] += currentForR;
    }

    for (let i = n - 1; i >= 0; i--) {
        if (dominoes[i] === "L") currentForL = n;
        else if (currentForL > 0 && dominoes[i] === ".") currentForL--;
        else {
            currentForL = 0;
        }
        forces[i] -= currentForL;
    }

    return forces.map((v) => `${v < 0 ? "L" : v === 0 ? "." : "R"}`).join("");
}

console.log(pushDominoes("R.R...L"));
console.log(pushDominoes("RR.L"));
console.log(pushDominoes(".L.R...LR..L.."));
