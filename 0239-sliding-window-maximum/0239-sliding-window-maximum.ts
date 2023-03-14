function maxSlidingWindow(nums: number[], k: number): number[] {
    class MonoQueue {
        private queue: number[];
        constructor() {
            this.queue = [];
        }
        
        public enqueue(value: number): void {
            let back: number | undefined = this.queue[this.queue.length - 1];
            while (back !== undefined && back < value) {
                this.queue.pop();
                back = this.queue[this.queue.length - 1];
            }
            this.queue.push(value);
        };
    
        public dequeue(value: number): void {
            let top: number | undefined = this.top();
            if (top !== undefined && top === value) {
                this.queue.shift();
            }
        };
    
        public top(): number | undefined {
            return this.queue[0];
        };
    } 
    const helperQueue: MonoQueue = new MonoQueue();
    let i: number = 0;
    let j: number = 0;
    let resArr: number[] = [];
    while (j < k) {
        helperQueue.enqueue(nums[j++]);
    }
    resArr.push(helperQueue.top()!);
    while (j < nums.length) {
        helperQueue.enqueue(nums[j]);
        helperQueue.dequeue(nums[i]);
        resArr.push(helperQueue.top()!);
        j++, i++;
    }
    return resArr;
};