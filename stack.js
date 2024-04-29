/** Node: node for a stack. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  /** Stack: a LIFO data structure where items are added and removed from the top
   *   */
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** push(val): add new value to end of the stack. Returns undefined.
     * @param {any} val
     */
  
    push(val) {
      let newNode = new Node(val);
      if (!this.top) { // if the stack is empty
        this.top = newNode; // the new node becomes the top node
      } else {
        newNode.next = this.top; // new node points to the current top
        this.top = newNode; // update top to the new node
      }
      this.size++;
  
    }
  
    /** pop(): remove the node from the top of the stack
     * and return its value. Should throw an error if the stack is empty.
     * @returns {any} */
  
    pop() {
      if (!this.top) throw new Error("Stack is empty"); // throw error if the stack is empty
      let temp = this.top; // hold the current top node
      this.top = this.top.next; // move the top pointer to the next node
      temp.next = null; // help garbage collection by removing reference from the removed node
      this.size--;
      return temp.val; // return the value of the popped node
  
    }
  
    /** peek(): return the value of the first node in the stack. 
     * @returns {any}
    */
  
    peek() {
        return this.top ? this.top.val : null;
  
    }
  
    /** isEmpty(): return true if the stack is empty, otherwise false
     * @returns {boolean}
     */
  
    isEmpty() {
        return this.size === 0;
  
    }
  }
  
  module.exports = Stack;
  