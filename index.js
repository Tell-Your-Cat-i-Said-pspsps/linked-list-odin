class Node {
  constructor(value) {
    this.value = value ? value : null;
    this.next = null;
  }
}
class LinkedList {
  constructor(head) {
    this.head = head ? head : new Node();
    this.tail = head;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let size = 1;
    let next = this.head.next;
    while (next !== null) {
      size++;
      next = next.next;
    }
    return size;
  }
  at(value) {
    if (value < this.size()) {
      let index = 0;
      let current = this.head;
      while (index != value) {
        index++;
        current = current.next;
      }
      return current;
    } else {
      return "Not a valid index";
    }
  }
  pop() {
    let current = this.head;
    let previous = this.head;
    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.tail = previous;
  }
  contains(value) {
    let index = 0;
    let current = this.head;
    const size = this.size();
    while (index < size) {
      if (current.value == value) {
        return true;
      }
      current = current.next;
      index++;
    }
    return false;
  }
  find(value) {
    let index = 0;
    let current = this.head;
    const size = this.size();
    while (index < size) {
      if (current.value == value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return "Not Found";
  }
  toString() {
    const size = this.size();
    let string = `(${this.head.value})`;
    let current = this.head.next;
    for (let i = 1; i < size; i++) {
      string += `->(${current.value})`;
      current = current.next;
    }
    return string;
  }
}
const head = new Node("Hi");
const newList = new LinkedList(head);
newList.append("hello");
newList.prepend("World");
console.log(newList.head);
console.log(newList.at(1));
console.log(newList.find("Hi"));
console.log(newList.toString());
