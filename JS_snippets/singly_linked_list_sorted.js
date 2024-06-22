'use strict';

class listNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {}

  head = null;
  tail = null;
  length = 0;

  addNode(value) {
    const nodeToAdd = new listNode(value);

    if (this.length === 0) {
      this.head = nodeToAdd;
      this.tail = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }

    if (nodeToAdd.value <= this.tail.value) {
      this.tail.next = nodeToAdd;
      this.tail = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    
    if (nodeToAdd.value > this.head.value) {
      nodeToAdd.next = this.head;
      this.head = nodeToAdd;
      this.length++;
      return nodeToAdd;
    }
    
    let currentNode = this.head;
    let previousNode = null;
    
    while (currentNode !== null) {
      if (currentNode.value < nodeToAdd.value && previousNode.value >= nodeToAdd.value) {
        nodeToAdd.next = currentNode;
        previousNode.next = nodeToAdd;
        this.length++;
        return nodeToAdd;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  removeSingleNode(value) {
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
      this.head.next = this.head;
      this.length--;
      return nodeToReturn;
    }

    let previousNode = null;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        const nodeToReturn = currentNode;
        previousNode.next = currentNode.next;
        this.length--;
        return nodeToReturn;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    return undefined;
  }

  removeAllMatchingNodes(value) {
    if (this.length === 0) {
      return undefined;
    }


    let previousNode = null;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (this.length === 1 && currentNode.value === value) {
        this.head = null;
        this.tail = null;
        this.length--;
        return undefined;
      }
      if (currentNode.value === value && currentNode.next === null) {
        this.tail = previousNode;
        previousNode.next = null;
        this.length--;
        return undefined;
      }
      if (currentNode.value === value) {
        currentNode = currentNode.next;
        previousNode.next = currentNode;
        this.length--;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
  }

  getMin() {
    if (length === 0) {
      return undefined;
    }

    return this.tail.value;
  }

  getMax() {
    if (this.length === 0) {
      return undefined;
    }

    return this.head.value;
  }

  nodeExists(value) {
    if (this.length === 0) {
      return false;
    }

    if (this.head.value === value || this.tail.value === value) {
      return true;
    }

    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      if (currentNode.next.value > value) {
        return false;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}
