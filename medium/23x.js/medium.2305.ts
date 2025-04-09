var distributeCookies = function (cookies: number[], k: number): number {
    let n = cookies.length;
    const children: number[] = Array(k).fill(0);
    let unfairness: number = Infinity;

    const distribute = (indexBag: number = 0): void => {
        if (indexBag >= n) {
            unfairness = Math.min(unfairness, Math.max(...children));
            return;
        }

        for (let c = 0; c < k; c++) {
            children[c] += cookies[indexBag];
            if (children[c] < unfairness) distribute(1 + indexBag);
            children[c] -= cookies[indexBag];

            if (children[c] === 0) break;
        }
    };
    distribute();
    return unfairness;
};