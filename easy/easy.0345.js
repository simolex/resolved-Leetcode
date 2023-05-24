/**
 * 345. Reverse Vowels of a String
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowels = "aeiou";
    let len = s.length;
    let startPoint = -1;
    let endPoint = s.length;
    let findByStart = false;
    let findByEnd = false;

    while (startPoint < endPoint) {
        if (findByStart && findByEnd) {
            const saveEnd = s.charAt(endPoint);
            const saveStart = s.charAt(startPoint);
            s =
                s.substring(0, startPoint) +
                saveEnd +
                s.substring(startPoint + 1, endPoint) +
                saveStart +
                s.substring(endPoint + 1, len);
            findByStart = false;
            findByEnd = false;
        }
        if (!findByStart) {
            startPoint += 1;
            if (vowels.includes(s.charAt(startPoint).toLowerCase())) {
                findByStart = true;
            }
        }
        if (!findByEnd) {
            endPoint -= 1;
            if (vowels.includes(s.charAt(endPoint).toLowerCase())) {
                findByEnd = true;
            }
        }
    }
    return s;
};

const a = reverseVowels("hello");
