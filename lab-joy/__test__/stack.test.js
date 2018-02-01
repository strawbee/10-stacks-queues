'use strict';

require('jest');
const Stack = require('../lib/stack');

describe('Stack Data Structure Module', () => {
    describe('Default Properties', () => {
        let stack = new Stack();

        it('should create a new instance of a Stack', () => {
            expect(stack).toBeInstanceOf(Stack);
        });

        it('should have a default val of null assigned to the top property', () => {
            expect(stack.top).toBeNull();
        });

        it('should have a default val of 0 assigned to the size property', () => {
            expect(stack.size).toEqual(0);
        });

        it('should have a maxSize property with a default val of 1048', () => {
            expect(stack.maxSize).toEqual(1048);
        });
    });

    describe('#Push', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);

        it('should have a size of 5', () => {
            expect(stack.size).toEqual(5);
        });

        it('should add a new node with the value of 6 to the top of the stack', () => {
            stack.push(6);
            expect(stack.top.value).toEqual(6);
        });

        it('throw an error when maxSize is met', () => {
            expect(() => {
                [...Array(1049)].map((e, i) => this.stack.push(~~(Math.random() * i)));
            }).toThrow();
        });
    });

    describe('#Pop', () => {
        let stack = new Stack();

        it('should remove the top most node from the stack', () => {
            stack.push(1);
            expect(stack.top.value).toEqual(1);
            expect(stack.pop().value).toEqual(1);
        });

        it('should throw an error when the stack size is 0', () => {
            expect(() => {
                stack.pop();
            }).toThrow();
        });
    });

    describe('#Peek', () => {
        let stack = new Stack();

        it('should throw an error when the stack size is 0', () => {
            expect(() => {
                stack.peek();
            }).toThrow();
        });

        it('should return the top of the stack', () => {
            stack.push(1);
            expect(stack.peek().value).toEqual(1);
        });

        it('should return the top of the stack', () => {
            stack.push(2);
            expect(stack.peek().value).toEqual(2);
        });
    });
});