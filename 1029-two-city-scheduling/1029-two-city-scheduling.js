/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // get cityCostABDifference
    // [ (20 -10, index), (200 -30), ...]
    // if it's positive-> favor to A
    // if it's negative -> favor to B
    
    // sort the difference array
    // [-30, -10, 20, 30, 60, 70]
    // map { 0: 10, 1: 170}
    // first half go to B, second half go to A
    let result = 0;
    let ABCostDifference = new Map();
    for (let i = 0; i < costs.length; i++) {
        let diff = costs[i][1] - costs[i][0];
        ABCostDifference.set(i, diff);
    }
    let sortedDiff = Array.from(ABCostDifference).sort((a, b) => a[1] - b[1]);
    console.log(sortedDiff);

    // .entries().sort((a, b) => a[1] - b[1]);
    for (let j = 0; j < sortedDiff.length / 2; j++) {
        let index = sortedDiff[j][0]
        result += costs[index][1];
    }
    
    for (let k = sortedDiff.length / 2; k < sortedDiff.length; k++) {
        let index = sortedDiff[k][0]
        result += costs[index][0];
    }
    
    return result;
};