class Stack {
  #item = [];
  push(x) {
    this.#item.push(x);
  }
  pop() {
    return this.#item.pop();
  }
  peek() {
    return this.#item[this.#item.length - 1];
  }
  getsize() {
    return this.#item.length;
  }
}

const st = new Stack();

st.push("A");
st.push("B");
st.push("C");

while (st.getsize() > 0) {
  console.log(st.peek());
  st.pop();
}
