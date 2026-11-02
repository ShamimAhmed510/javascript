const countBy=(arr) =>{
    return arr.reduce((items,char) =>{
     return items[char] ? ++items[char]:items[char]=1,items;
    } ,{})
};

console.log(countBy(["a", "b", "a", "c", "a"]));