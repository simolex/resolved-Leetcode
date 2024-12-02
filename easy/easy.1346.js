/**
 * 1346. Check If N and Its Double Exist
 *
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i != j && arr[i] == arr[j] * 2) {
                return true;
            }
        }
    }
    return false;
};

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
