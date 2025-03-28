/**
 * 273. Integer to English Words
 *
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    const uniqueNums = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen"
    };
    const multiplesOfThousands = [
        [1000000000000, "Trillion"],
        [1000000000, "Billion"],
        [1000000, "Million"],
        [1000, "Thousand"]
    ];

    const numberTens = {
        2: "Twenty",
        3: "Thirty",
        4: "Forty",
        5: "Fifty",
        6: "Sixty",
        7: "Seventy",
        8: "Eighty",
        9: "Ninety"
    };

    const result = [];
    const parseThousands = (part) => {
        const subResult = [];

        let hundred = Math.floor(part / 100);
        if (hundred > 0) {
            subResult.push(uniqueNums[hundred], "Hundred");
        }
        part %= 100;

        if (part > 0) {
            if (part < 20) {
                subResult.push(uniqueNums[part]);
            } else {
                subResult.push(numberTens[Math.floor(part / 10)]);
                part % 10 && subResult.push(uniqueNums[part % 10]);
            }
        }
        return subResult.join(" ");
    };

    if (num === 0) {
        return "Zero";
    }

    for (const [divider, name] of multiplesOfThousands) {
        const part = Math.floor(num / divider);
        if (part > 0) {
            result.push(parseThousands(part), name);
        }
        num %= divider;
    }
    num && result.push(parseThousands(num));

    return result.join(" ");
};

console.log(numberToWords(0));
console.log(numberToWords(10));
console.log(`-${numberToWords(90)}-`);
console.log(numberToWords(1234567));
