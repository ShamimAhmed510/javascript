const user = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) throw new Error("Network response was not ok");
    const user = await res.json();
    let i = 0;
    user.slice(0, 5).forEach((u) => {
      console.log(u.title);
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

user();
