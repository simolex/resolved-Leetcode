function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxArea = 0;
    let maxHipo = 0;
    for (const [h, w] of dimensions) {
        const hypot = h * h + w * w;
        if (hypot > maxHipo || (hypot === maxHipo && h * w > maxArea)) {
            maxArea = h * w;
            maxHipo = hypot;
        }
    }
    return maxArea;
};

console.log(areaOfMaxDiagonal([[9, 3], [8, 6]]));
console.log(areaOfMaxDiagonal([[3, 4], [4, 3]]));
console.log(areaOfMaxDiagonal([[2, 6], [5, 1], [3, 10], [8, 4]]));
