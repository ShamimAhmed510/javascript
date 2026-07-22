// console.log("Even numbers from 2 to 50 : ");
// for(let i=2 ; i<= 50 ; i++)
// {
//     if(i%2==0) console.log(i);
// }

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let ans = 100 * (100 + 1) / 2;
// if(sum == ans) console.log("Sum is correct");

// for(let i=1; i<=10 ; i++){

//     console.log(`${i} * 7 = ${i*7}`);

// }

for(let i=1; i<=30 ; i++){
    if(i%3==0) {
        console.log(i+" Fizz");
    }
    else if(i%5==0) {
        console.log(i+" Buzz");
    }
    else 
    {
        console.log(i+" FizzBuzz");
    }
}