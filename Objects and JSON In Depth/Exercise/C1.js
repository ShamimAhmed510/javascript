function solve(arr) {
    return arr.reduce((counts, item) => {
    counts[item] = (counts[item] ?? 0) +1;
    return counts
    }, {});
}

console.log(solve(["a", "b", "c", "a", "b","b"]));

