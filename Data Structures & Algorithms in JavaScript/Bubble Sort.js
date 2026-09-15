function BubbleSort(arr){
  let v = [...arr];
  for(let i = 0; i < v.length; i++){
    let swap = false;
    for(let j = 0; j < v.length - i - 1; j++){
      if(v[j] > v[j + 1]){
        [v[j], v[j + 1]] = [v[j + 1], v[j]];
        swap = true;
      }
    }
    if(!swap) break;
  }
  return v;
}

console.log(BubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]