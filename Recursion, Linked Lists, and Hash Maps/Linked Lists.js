class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  addFront(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  print() {
    let curr = this.head, out = [];

    while (curr) {
      out.push(curr.value);
      curr = curr.next;
    }
    console.log(out.join(" -> "));
  }

  find(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  }
}

const list = new LinkedList();

list.addFront(10);
list.addFront(50);
list.addFront(100);

list.print();

console.log(list.find(10));
