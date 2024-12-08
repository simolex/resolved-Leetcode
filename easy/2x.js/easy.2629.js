/**
 * 2629. Function Composition
 *
 * @param {Function[]} functions
 * @return {Function}
 */

var compose = function (functions) {
    return function (x) {
        return functions.reverse().reduce((resultFn, fn) => fn(resultFn), x);
    };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log(fn(4)); // 9
