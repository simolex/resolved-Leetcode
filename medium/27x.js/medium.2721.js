/**
 * 2721. Execute Asynchronous Functions in Parallel
 *
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = functions.length;

        functions.forEach((fn, i) =>
            fn()
                .then((res) => {
                    result[i] = res;
                    if (--count === 0) {
                        resolve(result);
                    }
                })
                .catch((rej) => reject(rej))
        );
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
