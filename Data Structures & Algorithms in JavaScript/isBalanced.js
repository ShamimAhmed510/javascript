function isBalanced(str) {
    const stack = [];
    const pairs = { ")": "(", "]": "[", "}": "{" };

    for (const ch of str) {
        if ("([{".includes(ch)) {
            stack.push(ch);
        } else if (")]}".includes(ch)) {
            if (stack.pop() !== pairs[ch]) return false;
        }
    }

    return stack.length === 0;
}



const snippet1 = `
    function greet(user) {
        if (user.isLoggedIn) {
            console.log("Welcome back, " + user.names[0]);
        }
    }
`;

console.log(isBalanced(snippet1)); // true


const snippet2 = `
    function greet(user) {
        if (user.isLoggedIn) {
            console.log("Welcome back, " + user.names[0]);
        // Missing closing brace '}' for the function here
`;

console.log(isBalanced(snippet2)); // false