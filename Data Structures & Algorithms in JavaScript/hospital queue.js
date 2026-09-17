class queue {
    #item = [] ;
    enqueue(x) { this.#item.push(x);}
    dequeue() { return this.#item.shift();}
    front() { return this.#item[0];}
    getsize() { return this.#item.length ;}
}

const hospital = new queue();

hospital.enqueue("Abir");
hospital.enqueue("Mahir");
hospital.enqueue("Shamim");
hospital.enqueue("Tarek");
hospital.enqueue("Afridi");

hospital.dequeue();
hospital.dequeue();

while(hospital.getsize() > 0)
{
    console.log(hospital.front());
    hospital.dequeue();
}