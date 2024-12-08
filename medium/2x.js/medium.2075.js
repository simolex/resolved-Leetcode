/**
 * 2054. Two Best Non-Overlapping Events
 *
 * @param {number[][]} events
 * @return {number}
 */

var maxTwoEvents = function (events) {
    const EventType = {
        start: -1,
        end: 1
    };

    const eventLine = [];

    for (let event of events) {
        eventLine.push({ time: event[0], weight: event[2], type: EventType.start });
        eventLine.push({ time: event[1], weight: event[2], type: EventType.end });
    }

    eventLine.sort((a, b) => a.time - b.time || a.type - b.type);

    let result = 0;
    let maxWeight = 0;
    for (let event of eventLine) {
        if (event.type === EventType.start) {
            result = Math.max(result, event.weight + maxWeight);
        } else if (event.type === EventType.end) {
            maxWeight = Math.max(maxWeight, event.weight);
        }
    }
    return result;
};

console.log(
    maxTwoEvents([
        [1, 3, 2],
        [4, 5, 2],
        [2, 4, 3]
    ])
);

console.log(
    maxTwoEvents([
        [1, 3, 2],
        [4, 5, 2],
        [1, 5, 5]
    ])
);

console.log(
    maxTwoEvents([
        [1, 5, 3],
        [1, 5, 1],
        [6, 6, 5]
    ])
);
