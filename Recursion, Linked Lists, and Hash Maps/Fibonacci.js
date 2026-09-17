function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log("fib :" + fib(40));

function fastFib(n){
    let [a,b] = [0, 1] ;
    for(let i=0; i<n; i++)
    {
        [a,b] = [b, a+b];
    }
    return a;
}

console.log("Fastfib :" + fastFib(40))

