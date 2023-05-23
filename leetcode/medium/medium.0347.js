var topKFrequent = function (nums, k) {
    const hashNums = nums.reduce((top, num) => {
        top[num] = !top[num] ? 1 : top[num] + 1;
        return top;
    }, {});
    topNums = Object.keys(hashNums).sort((a, b) => hashNums[b] - hashNums[a]);
    topNums.length = k;
    return topNums;
};
