const count = (arr) => {
    let result = 0;
return arr.reduce((result, str) =>
{
 return str.length > 2 ? result+1:result;
},0)
};

console.log(count(["pen","laptop","cup","monitor"]));