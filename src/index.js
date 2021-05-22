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
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    // completeORbackFromList("incomplete-list", deleteTarget);
  });

  completeButton.addEventListener("click", () => {
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    div.appendChild(backButton);
    const completeTarget = div.parentNode;
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  backButton.addEventListener("click", () => {
    div.removeChild(backButton);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    const completeTarget = div.parentNode;
    // document.getElementById("incomplete-list").appendChild(completeTarget);
    completeORbackFromList("incomplete-list", completeTarget);
  });

  const completeORbackFromList = (a, b) => {
    document.getElementById(a).appendChild(b);
  };

  div.className = "list-row";

  document.getElementById("incomplete-list").appendChild(li);
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  p.innerText = inputText;
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
