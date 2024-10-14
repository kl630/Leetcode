// 双向链表节点
function Node(k, v) {
    this.key = k;
    this.val = v;
    this.next = null;
    this.prev = null;
}

// 双向链表
function DoubleList() {
    // 头尾虚节点
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    // 链表元素数
    this._size = 0;

    // 初始化双向链表的数据
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

// 在链表尾部添加节点 x，时间 O(1)
DoubleList.prototype.addLast = function(x) {
    x.prev = this.tail.prev;
    x.next = this.tail;
    this.tail.prev.next = x;
    this.tail.prev = x;
    this._size++;
};

// 删除链表中的 x 节点（x 一定存在）
// 由于是双链表且给的是目标 Node 节点，时间 O(1)
DoubleList.prototype.remove = function(x) {
    x.prev.next = x.next;
    x.next.prev = x.prev;
    this._size--;
};

// 删除链表中第一个节点，并返回该节点，时间 O(1)
DoubleList.prototype.removeFirst = function() {
    if (this.head.next === this.tail) {
        return null;
    }
    var first = this.head.next;
    this.remove(first);
    return first;
};

// 返回链表长度，时间 O(1)
DoubleList.prototype.size = function() {
    return this._size;
};
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.cache = new DoubleList();
    this.cap = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) {
        return -1;
    }
    // this.makeRecently(key); // TODO: makeRecently
    var x = this.map.get(key);
    // 先从链表中删除这个节点
    this.cache.remove(x);
    // 重新插到队尾
    this.cache.addLast(x);
    return this.map.get(key).val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        // this.deleteKey(key); // TODO!! deleteKey
        var x = this.map.get(key);
        // 从链表中删除
        this.cache.remove(x);
        // 从 map 中删除
        this.map.delete(key);
        
        // this.addRecently(key, val); // TODO!! addRecently
        var x = new Node(key, value);
        // 链表尾部就是最近使用的元素
        this.cache.addLast(x);
        // 别忘了在 map 中添加 key 的映射
        this.map.set(key, x);
        return;
    }
    
    if (this.cap === this.cache.size()) {
        // 删除最久未使用的元素
        // this.removeLeastRecently(); // TODO: removeLeastRecently
        var deletedNode = this.cache.removeFirst();
        // 同时别忘了从 map 中删除它的 key
        var deletedKey = deletedNode.key;
        this.map.delete(deletedKey);
    }
    // 添加为最近使用的元素
    // this.addRecently(key, val); // TODO: addRecently
    var x = new Node(key, value);
    // 链表尾部就是最近使用的元素
    this.cache.addLast(x);
    // 别忘了在 map 中添加 key 的映射
    this.map.set(key, x);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
