/**
 * 394. Decode String
 *
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let current;
    const regDigit = /[0-9]+/;
    return s
        .split("")
        .reduce(
            (stack, t) => {
                if (regDigit.test(t)) {
                    current = stack.pop();
                    if (!current) {
                        stack.push(t);
                    } else if (regDigit.test(current)) {
                        stack.push(current + t);
                    } else {
                        stack.push(current);
                        stack.push(t);
                    }
                } else if (t === "[") {
                    stack.push("[", "");
                } else if (t === "]") {
                    let str = "";
                    let part;
                    while ((part = stack.pop()) != "[") {
                        str = part + str;
                    }
                    const count = stack.pop();
                    stack.push(str.repeat(+count));
                } else {
                    stack.push(stack.pop() + t);
                }
                return stack;
            },
            [""]
        )
        .join("");
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("abc3[cd]xyz"));
