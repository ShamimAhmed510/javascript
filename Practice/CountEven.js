const CountEven= (arr) => {
    return arr.reduce((count, n) => {
        return n%2 ==0 ? count+1:count 
    },0)
}

count = CountEven([1,2,3,4,5,6,7,8,9,10]);
console.log(count);

const sum=(arr) => {
    return arr.reduce((sum,n) => {
     return n%2 == 0 ? sum+n:sum;
    },0)
}

count = sum([1,2,3,4,5,6,7,8,9,10]);