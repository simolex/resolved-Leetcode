/**
 * 273. Integer to English Words
 *
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    const dictionary = {
        ones: {
            1: "One",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine"
        },
        tens: {
            10: "Ten",
            11: "Eleven",
            12: "Twelve",
            13: "Thirteen",
            14: "Fourteen",
            15: "Fifteen",
            16: "Sixteen",
            17: "Seventeen",
            18: "Eighteen",
            19: "Nineteen",
            20: "Twenty"
        }
    };
    const multiplesOfThousands = {
        1000: "Thousand",
        1000000: "Million",
        1000000000: "Billion",
        1000000000000: "Trillion"
    };

    const numberNames = {
        0: "Zero",

        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
        100: "Hundred"
    };

    if (num in numberNames && num < 100) {
        return numberNames[num];
    }
};

console.log(numberToWords(0));
console.log(numberToWords(10));
console.log(numberToWords(90));
console.log(numberToWords(12));
