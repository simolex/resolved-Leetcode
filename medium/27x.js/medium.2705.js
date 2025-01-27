/**
 * 2705. Compact Object
 *
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (typeof obj === "object" && obj !== null) {
        if (Array.isArray(obj)) {
            return obj.reduce((result, item) => {
                if (Boolean(item)) {
                    result.push(compactObject(item));
                }
                return result;
            }, []);
        } else {
            return Object.keys(obj).reduce((result, key) => {
                if (Boolean(obj[key])) {
                    result[key] = compactObject(obj[key]);
                }
                return result;
            }, {});
        }
    }
    return obj;
};

console.log(compactObject([null, 0, false, 1]));
console.log(compactObject({ a: null, b: [false, 1] }));
console.log(Boolean(1));
