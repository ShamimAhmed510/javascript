const config = {
    them:"light"
};

console.log(config)

config.color = "RED" // add
console.log(config) 
console.them="Gray" // update 
console.log(config) 
delete config.them;
console.log(config) // delete 
console.log("color" in config) // true 