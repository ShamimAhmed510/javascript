const mp = new Map();

word = ["Shamim", "Abir", "Shamim", "Abir", "Shamim", "Abir"];

 for (const w of word) {
     mp.set(w,(mp.get(w) || 0 ) + 1);
 }

 for (const [key, value] of mp) {
     console.log(`${key}: ${value}`);
 }

  