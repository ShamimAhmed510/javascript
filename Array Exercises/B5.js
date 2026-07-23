const a = ["banana", "Apple", "cherry"] ;
a.sort((a,b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
// a.sort((a,b) => a.localeCompare(b))

console.log(a)
