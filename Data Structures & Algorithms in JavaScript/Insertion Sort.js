function InsertionSort(arr) {
    let v = [...arr];
    for (let i=1; i<v.length; i++){
        const crrent = v[i];
        let j = i-1;
        while(j >=0 && v[j] > crrent){
            v[j+1] = v[j];
            j--;
        }
        v[j+1] = crrent;
    }
    return v;
}

console.log(InsertionSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]