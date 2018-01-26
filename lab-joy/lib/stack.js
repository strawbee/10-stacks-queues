'use strict'

const Node = require('./nd');

module.exports = class {
    constructor(maxSize = 1048) {
        this.top = null;
        this.maxSize = maxSize;
        this.size = 0;
    }

    push(val) {
        if (this.size === this.maxSize) throw new Error('Stack overflow!');
        let node = new Node(val);
        node.next = this.top;
        this.top = node;
        this.size++;
        return this.top;
    }

    pop() {
        if (!this.size) throw new Error('Nothing to pop!');
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.size--;
        return temp;
    }

    peek() {
        if (!this.size) throw new Error('Nothing to peek at!');
        return this.top;
    }
}