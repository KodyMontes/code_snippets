"use strict"

class ListNode {
  constructor(value) {
    value = value;
    next = null;
    previous = null;
  }
}

class DoublyLinkedListUnsorted {
  constructor () {}

  head = null;
  tail = null;
  length = 0;

  addSingleNode(value) {
    const nodeToAdd = new ListNode(value);

    if (this.length === 0) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    nodeToAdd.previous = this.tail;
    this.tail.next = nodeToAdd;
    this.tail = nodeToAdd;
    this.length++;
    return nodeToAdd;

  }
}