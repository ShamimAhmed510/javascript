function fizzalimit(n){
    return n%3 === 0 || n%5 === 0;
}

for(let i=1; i<=30; i++){
    if(fizzalimit(i)){
        console.log(i);
    }
}