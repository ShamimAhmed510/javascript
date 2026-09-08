const user = async () => {
  const list = document.querySelector("#users");
  list.textContent = "Loading...";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Network response was not ok");

    const users = await res.json();
    list.textContent = "";

    users.forEach((u) => {
      const li = document.createElement("li");
      li.textContent = u.name + " - " + u.email;
      list.appendChild(li);
    });
  } catch (error) {
    list.textContent = "Error loading users.";
    console.log(
      "There was a problem with the fetch operation: " + error.message,
    );
  }
};

user();
