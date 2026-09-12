//  Optional Chaining and Nullish Coalescing 
const user = {profile: {city: "New York"}};

console.log(user.profile?.city); // Output: "New York"

console.log(user.comtact?.phone) // Output: undefined (no error thrown)