class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //functions for linked list class here
  append(value) {
    //add new node to end of list
    let node = new Node(value);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  prepend(value) {
    //add new node to start of list
    let node = new Node(value);
    let header;
    let newHead;
    if (this.head == null) {
      this.head = node;
    } else {
      header = this.head;
      this.head = node;
      newHead = this.head;
      newHead.next = header;
    }
    this.size++;
  }
  size() {
    //return total number of nodes in list
    return this.size;
  }
  head() {
    //returns first node of list
    return this.head;
  }
  tail() {
    // returns last node of list
    if (this.head == null) {
      return null;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  }
  at(index) {
    //returns node at given index
    let current = this.head;
    for (let i = 1; i < index + 1; i++) {
      current = current.next;
    }
    return current;
  }
  pop() {
    //removes last element from list
    let current = this.head;
    let prev;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    // current.value = null; // what happens to 'lost' node
    this.size--;
  }
  contains(value) {
    //returns true if value is in the list, otherwise returns false
    let current = this.head;
    if (current.value == value) return true;
    else {
      while (current.next) {
        current = current.next;
        if (current.value == value) return true;
      }
    }
    return false;
  }
  find(value) {
    //returns index of node containing value, or null if not found
    let current = this.head;
    if (current.value == value) return 0;
    else {
      let i = 0;
      while (current.next) {
        current = current.next;
        i++;
        if (current.value == value) return i;
      }
    }
    return null;
  }
  toString() {
    //represents LinkedList objects as strings, printed to console
    // format: (value) -> (value) -> null
    let string = "";
    let current = this.head;
    string += "(" + current.value + ") -> ";
    while (current.next) {
      current = current.next;
      string += "(" + current.value + ") -> ";
    }
    string += "null";
    return string;
  }
  insertAt(value, index) {
    //insert new node with value at index
    let node = new Node(value);
    if (index == 0 && this.head == null) {
      this.head = node;
      this.size++;
    } else if (index == 0) {
      this.prepend(value);
    } else {
      let current = this.head;
      let prev;
      for (let i = 1; i < index + 1; i++) {
        prev = current;
        current = current.next;
        //try / except for to large of index?
      }
      prev.next = node;
      prev.next.next = current;
      this.size++;
    }
  }
  removeAt(index) {
    //remove node at index
    let current = this.head;
    let prev;
    if (index == 0) {
      this.head = current.next;
    } else {
      for (let i = 1; i < index + 1; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }
}
let test = new LinkedList();
test.append("test1");
test.prepend("test2");
test.prepend("test3");
console.log(test); // test3 -> test2 -> test1
console.log(test.size);
console.log(test.head);
console.log(test.tail());
console.log(test.at(1));
test.pop();
console.log(test);
test.append("test4");
console.log(test);
console.log("Contains test5?: " + test.contains("test5")); //false
console.log("Contains test2?: " + test.contains("test2")); //true
console.log("test4 at index:" + test.find("test4")); //2
console.log("test1 at index:" + test.find("test1")); //null
console.log("test3 at index:" + test.find("test3")); //0
console.log(test.toString());
test.insertAt("test5", 0);
console.log(test);
test.insertAt("test6", 3);
console.log(test);
test.removeAt(2);
console.log(test);
