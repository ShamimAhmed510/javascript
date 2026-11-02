function Max3(a,b,c)
{
    let largest = a;
    if(b > largest)
    {
        largest = b;
    }
    if(c > largest)
    {
        largest = c;
    }
    return largest;
}

console.log(Max3(10,20,30));