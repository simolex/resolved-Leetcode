/**
 * 845. Longest Mountain in Array
 *
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {
    let n = arr.length;
    // Определяем направления
    const directions = Array(n - 1);
    for (let i = 1; i < n; i++) {
        directions[i - 1] = Math.sign(arr[i - 1] - arr[i]);
    }
    // Суммируем кол-во соноправленных
    let pntStack = 0;
    const zippedDirections = [directions[0]];
    for (let i = 1; i < n - 1; i++) {
        if (Math.sign(zippedDirections[pntStack]) === Math.sign(directions[i])) {
            zippedDirections[pntStack] += directions[i];
        } else {
            pntStack++;
            zippedDirections.push(directions[i]);
        }
    }
    // Ищем скат, перед которым был подъем и выбираем максимальный путь
    let longestMountain = 0;
    let prev = zippedDirections[0];
    for (let i = 1; i <= pntStack; i++) {
        if (zippedDirections[i] > 0 && prev < 0) {
            longestMountain = Math.max(longestMountain, zippedDirections[i] - prev + 1);
        } else prev = zippedDirections[i];
    }

    return longestMountain;
};

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
console.log(longestMountain([2, 2, 2]));
