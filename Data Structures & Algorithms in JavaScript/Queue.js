// Queue FIFO 

class Queue {
    #item = [] ; 
    enqueue(x) { this.#item.push(x) ;}
    dequeue() { return this.#item.shift();}
    front () { return this.#item[0]; }
    getsize(){ return this.#item.length ;} 
}

const q = new Queue();

q.enqueue(1);

q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.dequeue());
console.log(q.front()); 
console.log(q.getsize()); 