function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  const count = new Map();

  for (const ch of s1) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }

  for (const ch of s2) {
    if (!count.get(ch)) return false;
    count.set(ch, count.get(ch) - 1);
  }

  return true;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Shamim", "mimsha"));
