/**
 * 1550. Three Consecutive Odds
 */

function threeConsecutiveOdds(arr: number[]): boolean {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 > 0) {
            count++;
        } else {
            count = 0;
        }

        if (count >= 3) {
            return true;
        }
    }
    return false;
};