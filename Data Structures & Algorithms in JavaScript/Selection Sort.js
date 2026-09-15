function SelectionSort(arr) {
  let v = [...arr];
  for (let i=0; i<v.length-1;  i++) {
    let minIndex = i;
    for(let j=i+1; j<v.length; j++) {
      if(v[j] < v[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i) {
      [v[i], v[minIndex]] = [v[minIndex], v[i]];
    }
  }
  return v;
}
console.log(SelectionSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]