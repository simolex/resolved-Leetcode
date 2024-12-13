/**
 * 2648. Generate Fibonacci Sequence
 *
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    const fib = [0, 1];

    yield fib[0];
    yield fib[1];
    for (let i = 2; i < 50; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        yield fib[i];
    }
};

const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
console.log(gen.next().value); // 0
