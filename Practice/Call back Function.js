


const AppleTwice =(fn,value,n) => {
    let result = value;
    for(let i=0; i < n; i++)
    {
        result = fn(result);
    }
    return result;
};
const Double =(num) => num * 2;

console.log(AppleTwice(Double, 5, 3)); // Output: 20   