import "./styles.css";
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  const li = document.createElement("li");
  const p = document.createElement("p");
  // const button = document.createElement("button");

  div.className = "list-low";
  li.appendChild(div);
  div.appendChild(p);
  p.textContent = inputText;

  document.getElementById("incomplete-list").appendChild(li);
  console.log(li);
  alert(inputText);
};

// .addEventListener('click', ()=>onClickAdd());

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());