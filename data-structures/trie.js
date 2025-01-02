// Node
// Trie:
//  insert
//  contains
//  startsWithPrefix

class Node {
  constructor() {
    this.children = {};
    this.isWordEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curr = this.root;
    for (let c of word) {
      if (!(c in curr.children)) {
        curr.children[c] = new Node();
      }
      curr = curr.children[c];
    }
    curr.isWordEnd = true;
  }

  contains(word) {
    let curr = this.root;
    for (let c of word) {
      if (!(c in curr.children)) {
        return false;
      }
      curr = curr.children[c];
    }
    return curr.isWordEnd;
  }

  startWithPrefix(prefix) {
    let curr = this.root;
    for (let c of prefix) {
      if (!(c in curr.children)) {
        return false;
      }
      curr = curr.children[c];
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("carrot");

console.log(trie.contains("banana"));
console.log(trie.contains("bana"));

console.log(trie.startWithPrefix("banana"));
console.log(trie.startWithPrefix("car"));
