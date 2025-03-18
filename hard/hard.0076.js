/**
 * 76. Minimum Window Substring
 *
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let result = "";
    let min = Infinity;

    if (s.length < t.length) {
        return result;
    }

    const freqS = new Map();
    const freqT = new Map();

    for (let chr of t) {
        freqT.set(chr, (freqT.get(chr) || 0) + 1);
    }

    const isEqualT = new Map([...freqT].map(([chr]) => [chr, false]));

    let char;
    let right = 0;
    let countEqual = 0;

    let current = "";

    for (let left = 0; left < s.length - t.length + 1; left++) {
        while (right < s.length && countEqual < freqT.size) {
            char = s[right];
            if (freqT.has(char)) freqS.set(char, (freqS.get(char) || 0) + 1);

            current += char;
            if (freqS.get(char) >= freqT.get(char) && !isEqualT.get(char)) {
                isEqualT.set(char, true);
                countEqual++;
            }
            right++;
        }

        if (right - left < min && countEqual === freqT.size) {
            min = right - left;
            result = current;
        }

        char = current[0];
        if (freqT.has(char)) freqS.set(char, freqS.get(char) - 1);

        if (freqS.get(char) < freqT.get(char) && isEqualT.get(char)) {
            isEqualT.set(char, false);
            countEqual--;
        }
        current = current.slice(1);
    }

    return result;
};
// Version #2
var minWindow = function (s, t) {
    let result = "";
    let min = Infinity;

    if (s.length < t.length) {
        return result;
    }

    const freqS = new Map();

    const freqT = {};
    for (let chr of t) {
        freqT[chr] = (freqT[chr] || 0) + 1;
    }
    const freqTSize = Object.keys(freqT).length;

    const isEqualT = {};
    for (let chr of Object.keys(freqT)) {
        isEqualT[chr] = false;
    }

    let char;
    let right = 0;
    let countEqual = 0;

    let current = "";

    for (let left = 0; left < s.length - t.length + 1; left++) {
        while (right < s.length && countEqual < freqTSize) {
            char = s[right];
            if (freqT[char]) freqS.set(char, (freqS.get(char) || 0) + 1);

            current += char;
            if (freqS.get(char) >= freqT[char] && !isEqualT[char]) {
                isEqualT[char] = true;
                countEqual++;
            }
            right++;
        }

        if (right - left < min && countEqual === freqTSize) {
            min = right - left;
            result = current;
        }

        char = current[0];
        if (freqT[char]) freqS.set(char, freqS.get(char) - 1);

        if (freqS.get(char) < freqT[char] && isEqualT[char]) {
            isEqualT[char] = false;
            countEqual--;
        }
        current = current.slice(1);
    }

    return result;
};

// Version #3
var minWindow = function (s, t) {
    let min = Infinity;
    let minLeft = 0;

    if (s.length < t.length) {
        return "";
    }

    const freqS = new Map();
    const freqT = new Map();

    for (let chr of t) {
        freqT.set(chr, (freqT.get(chr) || 0) + 1);
    }

    const isEqualT = new Map([...freqT].map(([chr]) => [chr, false]));

    let char;
    let right = 0;
    let countEqual = 0;

    for (let left = 0; left < s.length - t.length + 1; left++) {
        while (right < s.length && countEqual < freqT.size) {
            char = s[right];
            if (freqT.has(char)) freqS.set(char, (freqS.get(char) || 0) + 1);

            if (freqS.get(char) >= freqT.get(char) && !isEqualT.get(char)) {
                isEqualT.set(char, true);
                countEqual++;
            }
            right++;
        }

        if (right - left < min && countEqual === freqT.size) {
            min = right - left;
            minLeft = left;
        }

        char = s[left];
        if (freqT.has(char)) freqS.set(char, freqS.get(char) - 1);

        if (freqS.get(char) < freqT.get(char) && isEqualT.get(char)) {
            isEqualT.set(char, false);
            countEqual--;
        }
    }
    return min !== Infinity ? s.slice(minLeft, minLeft + min) : "";
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
console.log(minWindow("a", "b"));
