/**
 * 3362. Zero Array Transformation III
 */
const maxRemoval = (nums: number[], queries: number[][]): number => {
    queries.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

    const queryHeap = new MaxPriorityQueue<number>();
    const deferredDecrements: number[] = new Array(nums.length + 1).fill(0);
    let activeDecrements = 0;
    let queryIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        activeDecrements += deferredDecrements[i];

        while (queryIndex < queries.length && queries[queryIndex][0] === i) {
            queryHeap.enqueue(queries[queryIndex][1]);
            queryIndex++;
        }

        while (activeDecrements < nums[i] && queryHeap.size() && queryHeap.front() >= i) {
            activeDecrements++;
            deferredDecrements[queryHeap.pop() + 1]--;
        }

        if (activeDecrements < nums[i]) {
            return -1;
        }
    }
    return queryHeap.size();
};