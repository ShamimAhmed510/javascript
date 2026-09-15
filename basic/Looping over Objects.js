const stock = { pen: 5, book: 10, bag: 120 };
// console.log(stock);


for(const i of Object.keys(stock))
{
    console.log(i);
}

for(const i of Object.keys(stock))
{
    console.log(stock[i]);
}


console.log(Object.values(stock))

console.log(Object.entries(stock))