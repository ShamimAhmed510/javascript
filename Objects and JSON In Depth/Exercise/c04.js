const  orig = { inner: {v: 1}};

const dep = structuredClone(orig);
dep.inner.v = 2
console.log(orig.inner.v); // 1 dep copy cloned every level

const shallow = { ...orig};
shallow.inner.v = 3
console.log(orig.inner.v)