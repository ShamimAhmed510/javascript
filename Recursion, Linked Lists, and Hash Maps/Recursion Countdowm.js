function CountDown(n){
    if ( n == 0) { console.log("Go !!"); return; }
    process.stdout.write(n + "\t")
    return CountDown(n-1);
}

CountDown(5);