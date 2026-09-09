const coinFlip = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random > 0.5) {
        resolve("Heads");
      } else {
        reject("Tails");
      }
    }, 1000);
  });
};

coinFlip()
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
