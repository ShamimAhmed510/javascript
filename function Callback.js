function appleTwice(fn, value)
{
    return fn(fn(value));
}

const double = (x) => x*2;

const result = appleTwice(double, 5);
console.log(result);