/**
 * 2618. Check if Object Instance of Class
 *
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === undefined) return false;

    while (obj !== null) {
        if (obj.constructor === classFunction) return true;
        obj = Object.getPrototypeOf(obj);
    }

    return false;
};

var checkIfInstanceOf = function (obj, classFunction) {
    if (typeof classFunction !== "function" || obj === null || obj === undefined) return false;

    return Object(obj) instanceof classFunction;
};
