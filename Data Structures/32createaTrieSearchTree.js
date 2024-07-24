var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function () {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};
var Trie = function () {
  // Only change code below this line
  this.root = new Node();
  this.add = function (word) {
    let currentNode = this.root;
    let i = 0;

    while (i <= word.length) {
      if (i === word.length) {
        currentNode.setEnd();
        break;
      }
      if (!currentNode.keys.has(word[i])) {
        currentNode.keys.set(word[i], new Node());
      }
      currentNode = currentNode.keys.get(word[i]);
      i++;
    }
  };

  this.print = function () {
    const allWords = [];
    const printNode = (node, word = "") => {
      if (node.isEnd()) {
        allWords.push(word);
      }
      node.keys.forEach((value, key) => {
        printNode(value, word + key);
      });
    };
    printNode(this.root);
    return allWords;
  };

  this.isWord = function (word) {
    let currentNode = this.root;
    let i = 0;
    while (i <= word.length) {
      if (i === word.length) {
        return currentNode.isEnd();
      } else {
        if (!currentNode.keys.has(word[i])) {
          return false;
        }
        currentNode = currentNode.keys.get(word[i]);
        i++;
      }
    }
  };
  // Only change code above this line
};

const trie = new Trie();
trie.add("he");
trie.add("hell");
trie.add("papa");
trie.add("z");
console.log(trie.print());

//console.log(trie.root);

console.log(trie.isWord("h"));
