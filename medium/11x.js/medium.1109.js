/**
 * 1109. Corporate Flight Bookings
 *
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    const prefix = Array(n + 2).fill(0);
    const result = Array(n);
    let first, last, seats;
    let current = 0;

    for (let b = 0; b < bookings.length; b++) {
        [first, last, seats] = bookings[b];
        prefix[first] += seats;
        prefix[last + 1] -= seats;
    }

    for (let i = 1; i <= n; i++) {
        current += prefix[i];
        result[i - 1] = current;
    }
    return result;
};

console.log(
    corpFlightBookings(
        [
            [1, 2, 10],
            [2, 3, 20],
            [2, 5, 25],
        ],
        5
    )
);
console.log(
    corpFlightBookings(
        [
            [1, 2, 10],
            [2, 2, 15],
        ],
        2
    )
);
