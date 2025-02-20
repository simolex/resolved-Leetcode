/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    let n = nums.length;
    let bitsSize = nums[0].length;
    let mapNums = new Set();

    for (let i = 0; i < n; i++) {
        mapNums.add(nums[i]);
    }

    let len = 2 ** bitsSize;
    for (let i = 0; i < len; i++) {
        if (!mapNums.has(i.toString(2).padStart(bitsSize, "0"))) {
            return i.toString(2).padStart(bitsSize, "0");
        }
    }

    return "";
};

//Метод Кантора
var findDifferentBinaryString = function (nums) {
    let n = nums.length;
    let result = "";

    for (let i = 0; i < n; i++) {
        result += nums[i][i] === "0" ? "1" : "0";
    }

    return result;
};

console.log(findDifferentBinaryString(["01", "10"]));
console.log(findDifferentBinaryString(["01", "00"]));
console.log(findDifferentBinaryString(["111", "011", "001"]));
console.log(findDifferentBinaryString(["000", "011", "001", "010", "100", "101", "110"]));
