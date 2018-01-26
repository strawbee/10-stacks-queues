'use strict';

module.exports = class {
    constructor(val, next) {
        if (!val) return new Error('Value must be passed as argument');
        this.val = val;
        this.next = next || null;
    }
}