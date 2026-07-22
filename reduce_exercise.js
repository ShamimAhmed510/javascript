// 4. Use reduce to count how many numbers in an array are even.

const v = [ 1,2,3,4,5,6,7,8,9];
const even = v.reduce((count , item) => {
    return item%2 == 0 ? count+1 : count;
},0);

console.log(even);