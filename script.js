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
  }
  head() {
    //returns first node of list
  }
  tail() {
    //returns last node of list
  }
  at(index) {
    //returns node at given index
  }
  pop() {
    //removes last element from list
  }
  contains(value) {
    //returns true if value is in the list, otherwise returns false
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
console.log(test); // test2 -> test1
