const order = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true;
      if (ok) resolve("PizzaDelivered");
      else reject("Out of dough");
    }, 200);
  });
};

order()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

