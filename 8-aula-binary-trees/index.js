class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
      return;
    } else {
      this._add(this.root, newNode);
    }
  }

  _add(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this._add(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this._add(currentNode.right, newNode);
      }
    }
  }

  print() {
    if (!this.isEmpty()) {
      this._print(this.root, 0);
    }
  }

  _print(node, depth) {
    if (node !== null) {
      this._print(node.right, depth + 1);
      console.log(" ".repeat(4 * depth) + node.value);
      this._print(node.left, depth + 1);
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  remove(value){
    this.root = this._remove(this.root, value);
  }

  _remove(root, value){
    if(root === null) return root;

    if(value < root.value){
        root.left = this._remove(root.left, value);
    } else if(value > root.value){
        root.right = this._remove(root.right, value);
    } else {
        // cenário 1 
        // remover nó sem filhos 
        const rootHasNoNodes = !root.left && !root.right;
        if(rootHasNoNodes) return null;

        // cenário 2
        // remover nó com 1 filho apenas
        if(!root.left){
            return root.right;
        } else if(!root.right){
            return root.left;
        }

        // cenário 3
        // remover o nó que tem 2 filhos

        // substituindo o valor pelo menor valor encontrado
        root.value = this.min(root.right);

        // remover o nó da direita 
        root.right = this._remove(root.right, root.value);
    }

    return root;
  }

  min(root) {
    if(!root.left){
        return root.value;
    } else {
        return this.min(root.left);
    }
  }
}

const bst = new BinarySearchTree();
bst.add(8);
bst.add(3);
bst.add(10);
bst.add(1);

bst.print();

console.log('-------------');

bst.remove(3);
bst.print();
