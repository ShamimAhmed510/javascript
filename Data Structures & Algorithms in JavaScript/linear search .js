function LinearSearch(arr, t){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === t){
            return i;
        }
    }
    return -1;
}

console.log(LinearSearch([1,2,3,4,5], 3)); // Output: 2     
console.log(LinearSearch([1,2,3,4,5], 6)); // Output: -1