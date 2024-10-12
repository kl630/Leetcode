// TODO: create a Heap class with methods
class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }
    
    push(val) {
        this.queue.push(val);
        let index = this.size() - 1; // Keren question: is this correct? this.size?? this.size() !!!!
        let parent = Math.floor((index - 1) / 2);
        while (parent >= 0 && this.compare(parent, index) > 0) {
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }
    
    pop() {
        let out = this.queue[0];
        this.queue[0] = this.queue.pop();
        let index = 0;
        let left = 1;
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        
        while (searchChild !== undefined && this.compare(index, searchChild) > 0) {
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];
            index = searchChild;
            left = index * 2 + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }
        return out;
    }
    
    compare(index1, index2) {
        if (this.queue[index1] === undefined) return 1;
        if (this.queue[index2] === undefined) return -1;
        return this.compareFn(this.queue[index1], this.queue[index2]);
        // Keren question: is this correct? return this.compareFn(xxx, xxx)
    }
    
    size() {
        return this.queue.length;
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // use a heap to store elements in nums
    // maintain a hep size of k
    
    // min heap or max heap?   --- min heap
    // because we want to return the kth largest elem
    // [4, 6] --- if now we want to add 5 to the heap, we pop the first elem
    // in the queue
    let minHeap = new Heap((a, b) => a -b);
    // loop through nums array
    for (let num of nums) {
        // add each elem to the heap while maintain a heap size of k
        minHeap.push(num);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    // return the first elem in the heap
    return minHeap.queue[0]; // Keren Question: is this minHeap[0] or minHeap.queue[0] correct?? Or this.queue[0]
};