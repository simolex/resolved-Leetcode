/**
 * 2437. Number of Valid Clock Times
 *
 * @param {string} time
 * @return {number}
 */
var maximumTime = function (time) {
    const timeMap = [3, 10, 6, 10];
    let hour, minute, hourResult, minuteResult;

    let maxHours = -1;
    for (let i = time[0] == "?" ? 0 : timeMap[0] - 1; i < timeMap[0]; i++) {
        for (let j = time[1] == "?" ? 0 : timeMap[1] - 1; j < timeMap[1]; j++) {
            hour = `${time[0] == "?" ? i : time[0]}${time[1] == "?" ? j : time[1]}`;
            if (Number(hour) < 24 && Number(hour) > maxHours) {
                maxHours = Number(hour);
                hourResult = hour;
            }
        }
    }
    let maxMinutes = -1;
    for (let i = time[3] == "?" ? 0 : timeMap[2] - 1; i < timeMap[2]; i++) {
        for (let j = time[4] == "?" ? 0 : timeMap[3] - 1; j < timeMap[3]; j++) {
            minute = `${time[3] == "?" ? i : time[3]}${time[4] == "?" ? j : time[4]}`;
            if (Number(minute) < 60 && Number(minute) > maxMinutes) {
                maxMinutes = Number(minute);
                minuteResult = minute;
            }
        }
    }

    return `${hourResult}:${minuteResult}`;
};

console.log(maximumTime("?5:00"));
console.log(maximumTime("0?:0?"));
console.log(maximumTime("??:??"));
