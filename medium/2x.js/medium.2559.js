/**
 * 2559. Count Vowel Strings in Ranges
 *
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    const isValid = (word) => {
        const n = word.length;
        return vowels.has(word[0]) && vowels.has(word[n - 1]);
    };

    const prefixCounted = words.reduce(
        (prefix, word) => {
            let result = isValid(word) ? 1 : 0;

            result += prefix[prefix.length - 1];
            prefix.push(result);
            return prefix;
        },
        [0]
    );
    return queries.map(([l, r]) => prefixCounted[r + 1] - prefixCounted[l]);
};

console.log(
    vowelStrings(
        ["aba", "bcb", "ece", "aa", "e"],
        [
            [0, 2],
            [1, 4],
            [1, 1]
        ]
    )
);

console.log(
    vowelStrings(
        ["a", "e", "i"],
        [
            [0, 2],
            [0, 1],
            [2, 2]
        ]
    )
);

console.log(
    vowelStrings(
        [
            "b",
            "rmivyakd",
            "kddwnexxssssnvrske",
            "vceguisunlxtldqenxiyfupvnsxdubcnaucpoi",
            "nzwdiataxfkbikbtsjvcbjxtr",
            "wlelgybcaakrxiutsmwnkuyanvcjczenuyaiy",
            "eueryyiayq",
            "bghegfwmwdoayakuzavnaucpur",
            "ukorsxjfkdojcxgjxgmxbghno",
            "pmgbiuzcwbsakwkyspeikpzhnyiqtqtfyephqhl",
            "gsjdpelkbsruooeffnvjwtsidzw",
            "ugeqzndjtogxjkmhkkczdpqzwcu",
            "ppngtecadjsirj",
            "rvfeoxunxaqezkrlr",
            "adkxoxycpinlmcvmq",
            "gfjhpxlzmokcmvhjcrbrpfakspscmju",
            "rgmzhaj",
            "ychktzwdhfuruhpvdjwfsqjhztshcxdey",
            "yifrzmmyzvfk",
            "mircixfzzobcficujgbj",
            "d",
            "pxcmwnqknyfkmafzbyajjildngccadudfziknos",
            "dxmlikjoivggmyasaktllgmfhqpyznc",
            "yqdbiiqexkemebyuitve"
        ],
        [
            [0, 2],
            [0, 1],
            [2, 2]
        ]
    )
);
