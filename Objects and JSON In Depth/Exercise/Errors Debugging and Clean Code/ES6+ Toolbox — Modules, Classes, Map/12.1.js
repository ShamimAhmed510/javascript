//  Optional Chaining and Nullish Coalescing 
const user = {profile: {city: "New York"}};

console.log(user.profile?.city); // Output: "New York"

console.log(user.comtact?.phone) // Output: undefined (no error thrown)

const port = 0;

console.log(port ?? 3000); // Output: 0 (because port is not null or undefined )
console.log(port || 3000); // Output: 3000 (because port is falsy)  