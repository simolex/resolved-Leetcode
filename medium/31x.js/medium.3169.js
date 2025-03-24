/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    const diary = Array(days + 2).fill(0);

    for (let [start, stop] of meetings) {
        diary[start]++;
        diary[stop + 1]--;
    }

    let workDays = 0;
    let countMeetings = 0;
    for (let day = 1; day <= days; day++) {
        countMeetings += diary[day];
        if (countMeetings === 0) {
            workDays++;
        }
    }
    return workDays;
};

// Version #2
var countDays = function (days, meetings) {
    let n = meetings.length;
    const types = {
        start: 1,
        end: -1
    };

    let pntEvent = 0;
    const events = Array(n * 2);
    for (let [start, end] of meetings) {
        events[pntEvent++] = { time: end, type: types.end };
        events[pntEvent++] = { time: start, type: types.start };
    }
    events.sort((a, b) => a.time - b.time || b.type - a.type);

    let workDays = 0;
    let prevWorkDay = 0;
    let countMeetings = 0;
    for (let event of events) {
        if (event.type === types.start) {
            if (countMeetings === 0) {
                workDays += event.time - prevWorkDay - 1;
            }
            countMeetings++;
        } else if (event.type === types.end) {
            countMeetings--;
            if (countMeetings === 0) {
                prevWorkDay = event.time;
            }
        }
    }

    if (prevWorkDay < days) {
        workDays += days - prevWorkDay;
    }

    return workDays;
};

console.log(
    countDays(10, [
        [5, 7],
        [1, 3],
        [9, 10]
    ])
);
console.log(
    countDays(5, [
        [2, 4],
        [1, 3]
    ])
);
console.log(countDays(6, [[1, 6]]));
