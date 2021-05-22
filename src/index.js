import "./styles.css";
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  const div = document.createElement("div");
  const li = document.createElement("li");
  const p = document.createElement("p");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const backButton = document.createElement("button");

  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // alert("unchi!!");
  });
  deleteButton.innerText = "削除";
  backButton.innerText = "戻す";

  deleteButton.addEventListener("click", () => {
    const deleteTarget = div.parentNode;
    // console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    // alert("unchi!!");
  });

  completeButton.addEventListener("click", () => {
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    const completeTarget = div.parentNode;
    // console.log(deleteTarget);

    document.getElementById("complete-list").appendChild(completeTarget);
    // alert("unchi!!");
  });

  div.className = "list-row";

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  p.innerText = inputText;

  document.getElementById("incomplete-list").appendChild(li);
  // console.log(li);
  // alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
