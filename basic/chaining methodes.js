// // 6.6 Chaining Methods 

const cart = [
    { item: "book" , price: 450, qty: 2},
    { item: "pen" , price: 15, qty: 10},
    { item: "laptop" , price: 55000, qty: 1},

];

const afforDableTotal = cart
.filter((p) => p.price < 1000)
.map((p) => p.price * p.qty)
.reduce((sum ,v) => sum+v ,0 );

 console.log(afforDableTotal);