class Stack {
    #item = [];
    push(x){ this.#item.push(x);}
    pop(){ return this.#item.pop();}
    peek(){return this.#item[this.#item.length - 1]; }
    getsize() {return this.#item.length;}
}

const st = new Stack();

st.push(1);
st.push(2);
st.push(3);
st.push(4);
console.log(st.getsize()); // 4
st.pop(); // pop 4 
console.log(st.peek()); // 3 last elemnt 
console.log(st.getsize()); // 3 size 