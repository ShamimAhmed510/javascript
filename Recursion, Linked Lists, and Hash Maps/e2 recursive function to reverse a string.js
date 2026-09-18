function reverseString(str) {
  if (str === "" || str.length === 1) {
    return str;
  }
  
  return reverseString(str.substr(1)) + str.charAt(0);
}


console.log(reverseString("hello")); 