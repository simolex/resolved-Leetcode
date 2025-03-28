/**
 * 352. Data Stream as Disjoint Intervals
 */

var SummaryRanges = function () {
    this.intervals = [
        [-Infinity, -Infinity],
        [Infinity, Infinity]
    ];
};

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (value) {
    if (this.intervals.length === 0) {
        this.intervals.push([value, value]);
        return;
    }

    let l = 0;
    let r = this.intervals.length - 1;
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2);
        if (value <= this.intervals[m][1] || value <= this.intervals[m][0]) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    // Пропускаем если значение есть в  интервалах
    if (this.intervals[l][0] <= value && this.intervals[l][1] >= value) {
        return;
    }

    // Пробуем присоединить к интервалу который есть слева
    let fromLeftConnected = false;
    if (l > 1 && this.intervals[l - 1][1] === value - 1) {
        this.intervals[l - 1][1] = value;
        fromLeftConnected = true;
    } else if (l === 1 && this.intervals[l][1] === value - 1) {
        this.intervals[l][1] = value;
        return;
    }

    // Пробуем присоединить к интервалу который есть справа
    let fromRightConnected = false;
    if (this.intervals[l][0] === value + 1) {
        if (l > 0 && fromLeftConnected) {
            this.intervals[l - 1][1] = this.intervals[l][1];
        } else {
            this.intervals[l][0] = value;
        }
        fromRightConnected = true;
    }

    // Если значение объединило два интервала, то второй можно удалить
    if (fromLeftConnected && fromRightConnected) {
        this.intervals.splice(l, 1);
        return;
    }

    // Если значение не попало ни в один интервал, то вставляем его на месте
    if (!fromLeftConnected && !fromRightConnected) {
        this.intervals.splice(l, 0, [value, value]);
    }
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
    return this.intervals.slice(1, -1);
};

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */

var obj = new SummaryRanges();
obj.addNum(1);
console.log(obj.getIntervals());

obj.addNum(3);
console.log(obj.getIntervals());

obj.addNum(7);
console.log(obj.getIntervals());

obj.addNum(2);
console.log(obj.getIntervals());

obj.addNum(6);
console.log(obj.getIntervals());

// var obj = new SummaryRanges();
// obj.addNum(6);
// console.log(obj.getIntervals());

// obj.addNum(6);
// console.log(obj.getIntervals());

// obj.addNum(0);
// console.log(obj.getIntervals());
