# Lab 10 - Stacks and Queues
Joy Hou, Jan 26, 2018

## Problem Domain
We are creating classes with constructors and methods for stack and queue data structures. Our stacks and queues are linked lists.

## Installation and Use
1. Git clone this repository.

2. In your terminal, navigate to the lab-joy folder and run "node"

3. Enter "const Stack = require('./lib/stack');"

4. Enter "const Queue = require('./lib/queue');"

5. You can now access all of the modules and methods available for the Stack and Queue constructors.

6. You can run my tests by entering "npm run test"

## Modules
### Nd Module
This module exports the class and constructor to create a new node. It is used by both the stack and queue modules. To use this, after you have created a new instance of a Stack or Queue, you can type:

```let queue = new Queue();```

Or:

```let stack = new Stack();```

## Stack Module
This module exports the class with constructors and methods for a stack data structure. 

You can create a new instance of the Stack constructor by using:

```let stack = new Stack(maxSize);```

The maxSize argument is optional. The stack has the properties maxSize (default is 1048), size (default is 0), and top (defaut is null).

It has the push method, which inserts a new node to the top of the list. You can use stack.push(value): 

```stack.push(1)```

It also has a pop method, which removes the most recently inserted node at the top of the list. 

```stack.pop()```

It also has a peek method, which lets you see what the topmost (most recently inserted) node is without affecting the stack.

```stack.peek()```

## Queue Module
This module exports the class with constructors and methods for a queue data structure. 

You can create a new instance of the Queue constructor by using:

```let queue = new Queue(maxSize);```

The maxSize argument is optional. The queue has the properties maxSize (default is 1048), size (default is 0), and bottom (defaut is null).

It has the enqueue method, which inserts a new node to the list. You can use queue.enqueue(value): 

```queue.enqueue(1)```

It also has a dequeue method, which removes the first node inserted from the bottom of the list.

```stack.dequeue()```

It also has a peek method, which lets you see what the bottom-most (first inserted) node is without affecting the queue.

```queue.peek()```

