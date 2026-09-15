const isPassed = (mark) => mark >= 40 ;

function reportCard(name, mark){

    const result = isPassed(mark) ? "Passes" : "Failed";
    return `${name} is ${result} with marks : ${mark}`;

}

console.log(reportCard("Shamim", 90)); // Alice is Pass with marks : 45
console.log(reportCard("Tarek", 50));