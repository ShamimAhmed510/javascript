const a = [10, 20000, 30];

const b = a.find((u) => u < 500);

if(!b) console.log("Not find")
    else console.log(b)