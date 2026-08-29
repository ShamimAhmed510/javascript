const original = { name: "Shamim", score: 90}

const referenceCopy = original // referencenCopy change kolre original ta o change hobe


referenceCopy.score = 99

console.log(original.score) // 99

indepedendentCopy = { ...original} //orignal ta change hobe na ncopy ta change hobe
indepedendentCopy.score = 100 

console.log(original.score)  // 99
console.log(indepedendentCopy.score) / 100


