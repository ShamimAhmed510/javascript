const myData = {
  title: "JavaScript",
  run: function () {
    console.log("Running...");
  }, 
  extra: undefined, 
};

const jsonString = JSON.stringify(myData);
console.log(jsonString);
