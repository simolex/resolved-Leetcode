/**
 * 735. Asteroid Collision
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let left, current, result;

    return asteroids.reduce((stack, a) => {
        stack.push(a);

        let existAsteroid = true;
        while (
            a < 0 &&
            existAsteroid &&
            stack.length > 1 &&
            Math.sign(stack[stack.length - 1]) !== Math.sign(stack[stack.length - 2])
        ) {
            current = stack.pop();
            left = stack.pop();
            result = left + current;
            if (result > 0) {
                existAsteroid = false;
                stack.push(left);
            } else if (result < 0) {
                stack.push(current);
            } else {
                existAsteroid = false;
            }
        }

        return stack;
    }, []);
};

console.log(asteroidCollision([-2, -1, 1, 2]));
console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
