function isBalamced(str){
    const stack = [];
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if("({[".includes(char)){
            stack.push(char);
        }
        else if(")}]".includes(char)){
            const last = stack.pop();
            if (last && pairs[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBalamced("()")); // Output: true
console.log(isBalamced("()[]{}")); // Output: true
console.log(isBalamced("(]"));