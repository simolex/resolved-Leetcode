/**
 * 2437. Number of Valid Clock Times
 *
 * @param {string} time
 * @return {number}
 */
var countTime = function (time) {
    const timeMap = [3, 10, 6, 10];

    let countHours = 0;
    for (let i = time[0] == "?" ? 0 : timeMap[0] - 1; i < timeMap[0]; i++) {
        for (let j = time[1] == "?" ? 0 : timeMap[1] - 1; j < timeMap[1]; j++) {
            if (Number(`${time[0] == "?" ? i : time[0]}${time[1] == "?" ? j : time[1]}`) < 24) {
                countHours++;
            }
        }
    }
    let countMinutes = 0;
    for (let i = time[3] == "?" ? 0 : timeMap[2] - 1; i < timeMap[2]; i++) {
        for (let j = time[4] == "?" ? 0 : timeMap[3] - 1; j < timeMap[3]; j++) {
            if (Number(`${time[3] == "?" ? i : time[3]}${time[4] == "?" ? j : time[4]}`) < 60) {
                countMinutes++;
            }
        }
    }

    return countHours * countMinutes;
};

console.log(countTime("?5:00"));
console.log(countTime("0?:0?"));
console.log(countTime("??:??"));
