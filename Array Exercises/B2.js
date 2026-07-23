const words = ["Shamim", "Abir", "DJ", "mon"];

const d = words
.filter((u) => u.length >= 4)
.map((v) => v.toUpperCase());

console.log(d)