const orders = [
  { id: 1, customer: "Asha", amount: 450, status: "paid" },
  { id: 2, customer: "Rafi", amount: 1200, status: "panding" },
  { id: 3, customer: "Mim", amount: 300, status: "paid" },
  { id: 4, customer: "Sadia", amount: 800, status: "paid" },
];

// const order2 = orders.find((o) => o.id === 1);
const order2 = orders.filter((o) => o.status === "paid");

const lines = paid.map((o) => `${o.customer} : ${o.amount} BDT`);

console.log(order2);

const revenue = paid.reduce((s, o) => s + o.amount, 0);

console.log(revenue);
