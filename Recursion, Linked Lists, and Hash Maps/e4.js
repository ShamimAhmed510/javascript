function firstNonRepeatingChar(str) {
  const count = new Map();

  for (const ch of str) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }

  for (const ch of str) {
    if (count.get(ch) === 1) {
      return ch; 
    }
  }

  return null; 
}

console.log(firstNonRepeatingChar("leetcode"));    
console.log(firstNonRepeatingChar("loveleetcode")); 
console.log(firstNonRepeatingChar("aabbcc"));      