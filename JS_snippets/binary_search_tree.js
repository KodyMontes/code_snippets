"use strict"

class leafNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  };


  addNode(value) {
    const nodeToAdd = new leafNode(value);

    if (root === null) {
      this.root = nodeToAdd;
      return nodeToAdd;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return undefined;
      }
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = nodeToAdd;
          return nodeToAdd;
        } else {
          currentNode = currentNode.right;
          continue;
        }
      }
      if (currentNode.value > value) {
        if (currentNode.left === null) {
          currentNode.left = nodeToAdd;
          return nodeToAdd;
        } else {
          currentNode = currentNode.left;
          continue;
        }
      }
    }
      return undefined;
  }
}

