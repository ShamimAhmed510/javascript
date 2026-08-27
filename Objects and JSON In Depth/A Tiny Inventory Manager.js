const inventory = [
  { sku: "P-01", name: "pen", price: 15, qty: 40 },
  { sku: "B-01", name: "NoteBook", price: 60, qty: 0 },
  { sku: "G-01", name: "Bag", price: 1200, qty: 7 },
];

// console.log(inventory)

// 1. Total stock value (price x qty, summed)
const stockvalue = inventory.reduce((s, p) => s + p.price * p.qty, 0);

// console.log(stockvalue) // 9000

// 2. Which items need reordering?
const reorder = inventory.filter((p) => p.qty === 0).map((p) => p.name);

// console.log(reorder) // ["Notebook"]

// 3. Sell 2 pens — immutable update

const afterSale = inventory.map((p) =>
  p.sku === "P-01" ? { ...p, qty: p.qty - 2 } : p
);

// console.log(afterSale)

// 4. A report object, packed as JSON
const report = {
    generatedAt: "28/08/2026",
    stockvalue,
    reorder
    itemcount: inventory.length,
};

console.log(JSON.stringify(report , null , 2));


