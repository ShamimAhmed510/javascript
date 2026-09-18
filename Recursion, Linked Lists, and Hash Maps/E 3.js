class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;
    }
}

class LinkedList {
    head = null;

    addEnd(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return;
        }

        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }

        cur.next = node;
    }
}

const list = new LinkedList();

list.addEnd(10); 
list.addEnd(20);
list.addEnd(30);

// list.print(); 

// console.log(list.find(20)); 
// console.log(list.find(50)); 