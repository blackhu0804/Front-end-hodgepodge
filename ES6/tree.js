// 树 

class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insertTree(root, node) {
    if (node.element < root.element) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insertTree(root.left, node);
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this.insertTree(root.right, node);
      }
    }
  }

  append(element) {
    let node = new Node(element);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertTree(this.root, node);
    }
  }
}

let tree = new Tree();

tree.append(100);
tree.append(20);
tree.append(80);
tree.append(30);
tree.append(60);
console.dir(tree, {depth: 100})