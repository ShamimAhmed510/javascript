const base = { theme: "light", fontSize: 14 };
console.log({ ...base, theme: "dark" });
console.log({ theme: "dark", ...base });