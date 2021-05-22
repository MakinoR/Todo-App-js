import "./styles.css";
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  const li = document.createElement("li");
  const p = document.createElement("p");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("unchi!!");
  });
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("unchi!!");
  });

  div.className = "list-row";

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  p.innerText = inputText;

  document.getElementById("incomplete-list").appendChild(li);
  console.log(li);
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
