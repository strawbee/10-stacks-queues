'use strict';

const Node = require('./nd');

module.exports = class {
    constructor(maxSize = 1048) {
        this.bottom = null;
        this.maxSize = maxSize;
        this.size = 0;
    }

    // Like Array.prototype.push(): O(1) as it inserts the new node directly without iterating through the list 
    enqueue(val) {
        if (this.size === this.maxSize) throw new Error('Stack overflow!');
        let node = new Node(val);
        node.prev = this.bottom;
        if (!this.size) this.bottom = node;
        this.size++;
        return node;
    }

    // Like Array.prototype.shift(): O(1) as it only modifies the previous node in the list and does not iterate through the whole list.
    dequeue() {
        if (!this.size) throw new Error('Nothing to shift!');
        let temp = this.bottom;
        this.bottom = temp.prev;
        temp.prev = null;
        this.size--;
        return temp;
    }

    // O(1) as we keep track of the bottom node so can access it directly
    peek() {
        if (!this.size) throw new Error('Nothing to peek at!');
        return this.bottom;
    }
};