let user;
console.log(user.name); // This will throw an error because 'user' is undefined.

user = {
  name: "John Doe",
  age: 30,
};

 console.log(user.name); // This will now log "John Doe" because 'user' is defined.