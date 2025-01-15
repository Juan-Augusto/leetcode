// ex.:  5
//     3  10
//       7  15
//      ...

class Node {
  init(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  init() {
    this.root = null;
  }

  insert(val) {
    console.log("Inserting", val);
    if (!this.root) {
      this.root = new Node();
      this.root.init(val);
    } else {
      this.insertRecursive(val, this.root);
    }
  }

  insertRecursive(val, node) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new Node();
        node.left.init(val);
      } else {
        this.insertRecursive(val, node.left);
      }
    } else {
      if (!node.right) {
        node.right = new Node();
        node.right.init(val);
      } else {
        this.insertRecursive(val, node.right);
      }
    }
  }

  search(val) {
    return this.searchRecursive(val, this.root);
  }

  searchRecursive(val, node) {
    if (!node) {
      return false;
    }

    if (val === node.val) {
      return true;
    } else if (val < node.val) {
      return this.searchRecursive(val, node.left);
    } else {
      return this.searchRecursive(val, node.right);
    }
  }

  printBT() {
    return this.printBTRecursive(this.root);
  }

  printBTRecursive(node) {
    if (!node) {
      return;
    }

    return `${this.printBTRecursive(node.left) || ""} ${node.val} ${
      this.printBTRecursive(node.right) || ""
    }`;
  }
}

const testBT = () => {
  let bt = new BinaryTree();
  bt.init();

  bt.insert(5);
  bt.insert(3);
  bt.insert(10);
  bt.insert(7);
  bt.insert(15);

  console.log(bt.search(5)); // true
  console.log(bt.search(3)); // true
  console.log(bt.search(10)); // true
  console.log(bt.search(7)); // true
  console.log(bt.search(15)); // true
  console.log(bt.search(1)); // false
  console.log(bt.search(6)); // false
  console.log(bt.search(11)); // false
  console.log(bt.search(16)); // false

  console.log("Printing BT...", bt.printBT());
};

testBT();
