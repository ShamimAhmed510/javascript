const item = {
    book: 17,
    pen: 20,
    bag: 7,
};

const ans = Object.values(item).filter((val) => val > 7)

console.log(ans)