// function isEven(n){
//     return n%2 === 0;
// }

// for(let i=1; i<=10; i++)
// {
//     console.log(isEven(i));
// }


// function celsiusToFarenheite(celsius){
//     return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFarenheite(0)); // 32
// console.log(celsiusToFarenheite(100)); // 212  


function Max(a,b,c){
    return (a>b) ? ( (a>c) ? a : c ) : ( (b>c) ? b : c );
}

console.log(Max(100, 200, 30)); // 30