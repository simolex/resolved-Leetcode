/**
 * 859. Buddy Strings
 *
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    let n = s.length;
    let m = goal.length;
    if (n !== m) {
        return false;
    }

    let swap_S1;
    let swap_S2;
    let isSwaped = false;
    let existPair = false;

    const counting = s.split("").reduce((obj, char) => {
        obj[char] = -~obj[char];
        if (obj[char] > 1) {
            existPair = true;
        }
        return obj;
    }, {});

    for (let i = 0; i < n; i++) {
        if (s[i] !== goal[i]) {
            if (!swap_S1) {
                swap_S1 = s[i];
                swap_S2 = goal[i];
            } else if (!isSwaped) {
                if (swap_S1 !== goal[i] || swap_S2 !== s[i]) {
                    return false;
                }
                isSwaped = true;
            } else {
                return false;
            }
        }
    }
    if (!isSwaped) {
        if (!!swap_S1 || !existPair) {
            return false;
        }
    }
    return true;
};

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
