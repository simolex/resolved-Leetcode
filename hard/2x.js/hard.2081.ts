function kMirror(k: number, n: number): number {
    let result = 0;
    let targetSize = 0;
    let targetHalfSize = 0;

    const isPalindromeK = (base10: string) => {
        const baseK = parseInt(base10).toString(k);
        const sizeK = baseK.length;
        const halfSizeK = Math.ceil(sizeK / 2);
        for (let i = 0; i < halfSizeK; i++) {
            if (baseK[i] !== baseK[sizeK - i - 1]) {
                return false;
            }
        }
        return true;
    }

    const getPalindrome10 = (current: string = '', mirror: string = '', position: number = 0) => {
        if (n === 0) return;

        if (position === targetHalfSize) {
            const polindrome = current + mirror.slice(2 * position - targetSize);
            if (isPalindromeK(polindrome)) {
                result += parseInt(polindrome)
                n--;
            }
            return;
        }

        for (let i = 0; i < 10; i++) {
            if (position == 0 && i == 0) continue;
            getPalindrome10(`${current}${i}`, `${i}${mirror}`, position + 1);
        }
    }

    while (n > 0) {
        targetSize++;
        targetHalfSize = Math.ceil(targetSize / 2);
        getPalindrome10();
    }
    return result;
};

console.log(kMirror(2, 5));
console.log(kMirror(3, 7));
console.log(kMirror(7, 17));
