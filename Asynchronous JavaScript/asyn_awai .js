
const order = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true;
      if (ok) resolve("PizzaDelivered");
      else reject("Out of dough");
    }, 200);
  });
};


const main = async() =>{
    try{
  const msg = await order(); 
  console.log(msg);
    }
    catch(err){
   console.log(err)
    }
};

main();