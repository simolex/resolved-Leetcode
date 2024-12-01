/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let area = 0;
    let i = 0;
    let right = height.length - 1;

    while (i < right) {
        area = Math.max(area, Math.min(height[right], height[i]) * (right - i));
        if (height[i] <= height[right]) {
            i++;
        } else {
            right--;
        }
    }

    return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 2, 1]));
console.log(maxArea([1, 2]));
console.log(maxArea([4, 4, 2, 11, 0, 11, 5, 11, 13, 8]));
