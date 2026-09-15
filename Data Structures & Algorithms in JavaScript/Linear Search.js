function LinearSearch(arr, t){
    let cnt = 0;
    for(let i=0; i<arr.length; i++){
        cnt++;
        if(arr[i] === t){
            return cnt;
        }
    }
    return -1;
}

console.log(LinearSearch([1,2,3,4,5], 3)); // Output: 2     
console.log(LinearSearch([1,2,3,4,5], 6)); // Output: -1