/**
 * 1023. Camelcase Matching
 *
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
    const result = [];
    const regCamel = /[A-Z]/g;
    const splitPattern = [];
    let matched, index, lengthQuery, subStr;

    let indexFrom = 0;
    while ((matched = regCamel.exec(pattern)) !== null) {
        if (matched.index > 0) {
            subStr = pattern.substring(indexFrom, matched.index);
            splitPattern.push(new RegExp(subStr.split("").join(".*") + ".*"));
            indexFrom = matched.index;
        }
    }
    subStr = pattern.substring(indexFrom);
    splitPattern.push(new RegExp(subStr.split("").join(".*") + ".*"));

    let patternSize = splitPattern.length;
    for (const query of queries) {
        index = 0;
        lengthQuery = 0;
        indexFrom = 0;
        regCamel.lastIndex = 0;
        while ((matched = regCamel.exec(query)) !== null && index < patternSize) {
            if (matched.index > 0) {
                subStr = query.substring(indexFrom, matched.index);
                if (splitPattern[index].test(subStr)) {
                    lengthQuery += subStr.length;
                }
                indexFrom = matched.index;
                index++;
            }
        }
        if (index < patternSize) {
            subStr = query.substring(indexFrom);
            if (splitPattern[index].test(subStr)) {
                lengthQuery += subStr.length;
            }
            index++;
        }

        result.push(lengthQuery === query.length && index === patternSize ? true : false);
    }
    return result;
};

var camelMatch = function (queries, pattern) {
    const isUpperCase = (char) => char === char.toUpperCase();

    const matchQueryWithPattern = (query, pattern) => {
        let pntQuery = 0,
            pntPattern = 0;

        while (pntQuery < query.length && pntPattern < pattern.length) {
            if (query[pntQuery] === pattern[pntPattern]) {
                pntQuery++;
                pntPattern++;
            } else {
                if (isUpperCase(query[pntQuery])) {
                    return false; // Mismatch in uppercase character
                }
                pntQuery++;
            }
        }

        // Check if any remaining characters in the query are uppercase
        while (pntQuery < query.length) {
            if (isUpperCase(query[pntQuery])) {
                return false;
            }
            pntQuery++;
        }

        return pntPattern === pattern.length;
    };

    return queries.map((query) => matchQueryWithPattern(query, pattern));
};

console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FB"));
console.log(
    camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FoBa")
);
console.log(
    camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FoBaT")
);
console.log(camelMatch(["CompetitiveProgramming", "CounterPick", "ControlPanel"], "CooP"));
console.log(
    camelMatch(
        [
            "aksvbjLiknuTzqon",
            "ksvjLimflkpnTzqn",
            "mmkasvjLiknTxzqn",
            "ksvjLiurknTzzqbn",
            "ksvsjLctikgnTzqn",
            "knzsvzjLiknTszqn",
        ],
        "ksvjLiknTzqn"
    )
);
console.log(
    camelMatch(
        [
            "mifeqvzphnrv",
            "mieqxvrvhnrv",
            "mhieqovhnryv",
            "mieqekvhnrpv",
            "miueqrvfhnrv",
            "mieqpvhzntrv",
            "gmimeqvphnrv",
            "mieqvhqyunrv",
        ],
        "mieqvhnrv"
    )
);
//
