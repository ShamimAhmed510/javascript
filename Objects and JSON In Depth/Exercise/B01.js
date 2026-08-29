const timer = {
    second: 0 ,
    tick()
    {
        this.second++
        return this.second 
    }
};

console.log(timer.tick());
console.log(timer.tick());
console.log(timer.tick());