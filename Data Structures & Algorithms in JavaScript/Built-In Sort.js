arr = [5, 3, 8, 4, 2];
arr.sort((a,b) => a - b);
console.log(arr); // Output: [2, 3, 4, 5, 8]

arr.sort((a,b) => b-a);
console.log(arr); // Output: [8, 5, 4, 3, 2]

let user = [{name: "a", id: 3}, {name: "b", id: 1}, {name: "c", id: 2}];

user.sort((a,b) => a.id - b.id); 
console.log(user); // Output: [{name: "b", id: 1}, {name: "c", id: 2}, {name: "a", id: 3}]

user.sort((a,b) => a.name)