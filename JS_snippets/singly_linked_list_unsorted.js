"use strict"

class listNode {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class singlyLinkedListUnsorted {
  constructor () {};

  head = null;
  tail = null;
  length = 0;

  pushNode(value) {
    const newNode = new listNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }
  
  popNode() {
    if (this.length === 0) {
      return undefined;
    }
    
    const nodeToReturn = this.tail; 
    
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToReturn;
    }
    
    let previousNode = null;
    let currentNode = this.head;
    while (currentNode.next !== null) {   
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = null;
    this.tail = previousNode;
    this.length--;
    return nodeToReturn;
  }
  
  unshiftNode(value) {
    const newNode = new listNode(value);
    if (this.length === 0) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return newNode;
  }

  shiftNode() {
    if (this.length === 0) {
      return undefined;
    }   
    const nodeToReturn = this.head;
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    return nodeToReturn;
  }

  nodeExists(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  }


  removeFirstMatchingNode(value) {
    if (this.length === 0) {
      return undefined;
    }
    
    if (this.length === 1 && this.head.value === value) {
      const nodeToReturn = this.head;
      this.head = null;
      this.tail = null;
      this.length--
      return nodeToReturn;
    }
    
    let previousNode = null;
    let currentNode = head;
    
    while (currentNode !== null) {
      if (currentNode.value === value) {
        const nodeToReturn = currentNode;
        previousNode.next = currentNode.next;
        this.length--;
        return nodeToReturn;
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
      } else if (currentNode.value === value) {
        currentNode = currentNode.next;
        previousNode.next = currentNode;
        this.length--;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    return undefined;
  }

  getMinValue() {
    let minValue = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value < minValue) {
        minValue = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return minValue;
  }

  getMaxValue() {
    let maxValue = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value > maxValue) {
        maxValue = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return maxValue;
  }

  matchingNodeCount(value) {
    let matchingNodes = 0;
    let currentNode = this.head;
    while(currentNode !== null) {
      if (currentNode.value === value) {
        matchingNodes++;
      }
    }
    return matchingNodes;
  }

  addArrayOfValues(inputArray) {
    for (let value of inputArray) {
      const newNode = new listNode(value);
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
        this.length++;
        continue;
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
}
