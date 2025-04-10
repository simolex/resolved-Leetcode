function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
    const sLimit = limit.toString();
    const sizePrefix = (num: string): number => {
        if (num.length < s.length) {
            return 0;
        }

        if (num.length === s.length) {
            return Number(num >= s);
        }

        const prefix = num.slice(0, -s.length);
        let power = prefix.length;
        let count = 0;

        for (const digit of prefix) {
            if (sLimit < digit) {
                count += (limit + 1) ** power;
                return count;
            }
            count += Number(digit) * (limit + 1) ** (power - 1);
            power--;
        }
        num.slice(-s.length) >= s && count++;

        return count;
    };

    const sStart = (start - 1).toString();
    const sFinish = finish.toString();
    return sizePrefix(sFinish) - sizePrefix(sStart);
}

console.log(numberOfPowerfulInt(1, 6000, 4, "124"));
console.log(numberOfPowerfulInt(15, 215, 6, "10"));
console.log(numberOfPowerfulInt(1000, 2000, 4, "3000"));
console.log(numberOfPowerfulInt(1, 971, 9, "71"));
console.log(numberOfPowerfulInt(10, 1844, 5, "12"));
