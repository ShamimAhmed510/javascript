const FormateUser({name, city: "Unknown"}){
    return `${name} city: ${city}`
}

console.log(FormateUser({name: "Shamim", city: "sylhet"}));