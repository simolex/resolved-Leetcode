/**
 * 841. Keys and Rooms
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const n = rooms.length;
    let currentRoom;
    const visited = Array(rooms.length).fill(false);

    const stack = [0];

    while (stack.length > 0) {
        currentRoom = stack.pop();
        visited[currentRoom] = true;

        rooms[currentRoom].forEach((i) => {
            if (!visited[i] && i < n) {
                stack.push(i);
            }
        });
    }

    return !visited.filter((v) => !v).length;
};

console.log(canVisitAllRooms([[1], [2], [3], []]));
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
