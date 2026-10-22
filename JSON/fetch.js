const LoadData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

const LoadtPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data));
};

const display = (date) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  date.forEach((element) => {
    const postCard = document.createElement("div");
    postCard.innerHTML = `
    <div class="post-card">
        <h2>${element.title}</h2>
        <p>
          ${element.body}
        </p>
      </div>
    `;
    postContainer.append(postCard);
  });
};

LoadtPost(); // click na krle o card post dekabe
