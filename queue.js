/** Node: node for a queue. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** Queue: a FIFO (First In First Out) data structure implemented with linked nodes
   *   */
  
  class Queue {
    constructor() {
      this.first = null; //first node in q
      this.last = null; // last node in q
      this.size = 0; // tracks num of nodes in q
    }
  
    /** enqueue(val): add new value to end of the queue. Returns undefined. 
      * @param {any} val */
  
    enqueue(val) {
        let newNode = new Node(val);
      if (!this.first) { // if the q is empty
        this.first = newNode;
        this.last = newNode;
      } else {
        this.last.next = newNode; // link the new node after the last node
        this.last = newNode; // make the new node the last node
      }
      this.size++;
  
    }
  
    /** dequeue(): remove the node from the start of the queue
     * and return its value. Should throw an error if the queue is empty. 
     * @returns {any} */
  
    dequeue() { 
      if (!this.first) throw new Error("Queue is empty"); // throw error if the q is empty
      let temp = this.first;
      this.first = this.first.next; // move the first pointer to the next node
      temp.next = null; // help garbage collection by removing reference from the removed node
      this.size--;
      if (this.size === 0) {
        this.last = null; // if the q becomes empty, update the last pointer to null
      }
      return temp.val; // return the value of the dequeued node
  
    }
  
    /** peek(): return the value of the first node in the queue. 
     * @returns {any} */
  
    peek() {
        return this.first ? this.first.val : null;
  
    }
  
    /** isEmpty(): return true if the queue is empty, otherwise false 
     * @returns {boolean}
    */
  
    isEmpty() {
        return this.size === 0;
  
    }
  }
  
  module.exports = Queue;
  