function repeat(n, action){
    for(let i=1; i<=n; i++){
        action(i);
    }
}

repeat(10, (n) => console.log(`${n} * 10 = ${n*10} `));