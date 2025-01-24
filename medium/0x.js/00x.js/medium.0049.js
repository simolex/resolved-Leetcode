/**
 * 49. Group Anagrams
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var add = function (map, key, value) {
    if (!map.has(key)) {
        map.set(key, []);
    }
    map.get(key).push(value);
};

var groupAnagrams = function (strs) {
    let key;
    let letter;
    let result = [];
    const groups = new Map();
    for (let s = 0; s < strs.length; s++) {
        const hashSet = {};
        for (let i = 0; i < strs[s].length; i++) {
            letter = strs[s][i];
            if (!hashSet[letter]) {
                hashSet[letter] = 0;
            }
            hashSet[letter]++;
        }

        key = Object.keys(hashSet)
            .sort()
            .reduce((partKey, c) => {
                partKey.push(`${c}~${hashSet[c]}`);
                return partKey;
            }, [])
            .join("_");

        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(strs[s]);
    }
    for (const set of groups.keys()) {
        result.push(groups.get(set));
    }
    return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
