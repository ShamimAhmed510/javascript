const  user = {
    name: "shamim", role:"Admin", city:"Sylhet",
    social :{gitub:"Shamim_Dev"} ,
};

const {name, role} = user; 
const {city : hometwon} = user; // rename 
const {country = "Bangladesh"} = user; // default value
const {social:{gitub}} = user; // nested destructuring  

console.log(name, role, hometwon, country, gitub); 