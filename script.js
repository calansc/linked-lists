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
    while (current.next) {
      current = current.next;
    }
    current.value = null;
    // current.next = null;
    // need to set previous next to null
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
  }
  toString() {
    //represents LinkedList objects as strings, printed to console
    // format: (value) -> (value) -> null
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
console.log("test5?: " + test.contains("test5")); //false
console.log("test2?: " + test.contains("test2")); //true
