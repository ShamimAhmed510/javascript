// function Max3(a,b,c)
// {
//     let largest = a;
//     if(b > largest)
//     {
//         largest = b;
//     }
//     if(c > largest)
//     {
//         largest = c;
//     }
//     return largest;
// }

// console.log(Max3(10,20,30));

function Max(arr)
{
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++)
    {
        if(arr[i] > largest)
        {
            largest = arr[i];
        }
    }
    return largest; 
}

console.log(Max([10,20,30,40,50]));