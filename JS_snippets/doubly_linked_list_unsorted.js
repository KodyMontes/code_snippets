"use strict"

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedListUnsorted {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  

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

  removeSingleMatchingNode(value) {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1 && this.head.value === value) {
      const nodeToReturn = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToReturn;
    }

    if (this.head.value === value) {
      const nodeToReturn = this.head;
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;
      return nodeToReturn;
    }

    if (this.tail.value === value) {
      const nodeToReturn = this.tail;
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.length--;
      return nodeToReturn;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        const nodeToReturn = currentNode;
        currentNode.prev = currentNode.next;
        this.length--;
        return nodeToReturn;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }
}