const topTitle = Response.date?.posts?.reduce(
  (best, p) => (p.likes > best, likes ? p : best),
)?.title;

console.log(topTitle); 
