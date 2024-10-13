class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }
    
    push(val) {
        this.queue.push(val);
        let index = this.size() - 1;
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
            left = 2 * index + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }
        return out;
    }
    
    size() {
        return this.queue.length;
    }
    
    compare(index1, index2) {
        if (this.queue[index1] === undefined) return 1;
        if (this.queue[index2] === undefined) return -1;
        return this.compareFn(this.queue[index1], this.queue[index2]);
    }
    
    peak() {
        return this.queue[0];
    }
}

function topKFrequent(nums, k) {
    let result = [];
    
    // what data to store in the minHeap?
    // nums = [1,1,1,2,2,3], k = 2
    // create a hashmap, { elemVal: freq }, e.g. { 1: 3, 2: 2, 3: 1 }
    let hashmap = new Map();
    for (let num of nums) {
        if (!hashmap.has(num)) {
            hashmap.set(num, 1);
        } else { 
            hashmap.set(num, hashmap.get(num) + 1);
        }
    }
    // then I can use map.entries() => [[1, 3], [2, 2], [3, 1]]
    // use a minHeap
    let minHeap = new Heap((a, b) => a[1] - b[1]);
    for (let [elemVal, freq] of hashmap.entries()) {
        minHeap.push([elemVal, freq]);
        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }
    // we need to return the k most frequent elements- the value itself
    for (let [elemVal, freq] of minHeap.queue) { 
        result.push(elemVal);
    }
    return result;
};