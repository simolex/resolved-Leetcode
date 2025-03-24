/**
 * 71. Simplify Path
 *
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const parts = path.split("/");
    const tokens = [];

    for (let part of parts) {
        if (part == "..") {
            tokens.pop();
        } else if (part.length !== 0 && part !== ".") {
            tokens.push(part);
        }
    }

    return "/" + tokens.join("/");
};

console.log(simplifyPath("/home/"));
console.log(simplifyPath("/home//foo/"));
console.log(simplifyPath("/home/user/Documents/../Pictures"));
console.log(simplifyPath("/../"));
console.log(simplifyPath("/.../a/../b/c/../d/./"));
