const invert = (obj) =>
{
    return Object.fromEntries(Object.entries(obj).map(([x,y] ) => [y,x]));
}

const obj = {
    name: "Shamim",
    city: "Sylhet",
    country: "Bangladesh"
};

console.log(invert(obj)); 