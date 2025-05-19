function triangleType(nums: number[]): string {
    const edges = new Set<number>(nums);
    const [a, b, c] = nums;

    if (a + b <= c || b + c <= a || c + a <= b) return "none";
    if (edges.size == 3) return "scalene";
    if (edges.size == 2) return "isosceles";
    return "equilateral";
}

console.log(triangleType([3, 3, 3]));
console.log(triangleType([3, 2, 3]));
console.log(triangleType([3, 4, 5]));
console.log(triangleType([3, 4, 7]));
