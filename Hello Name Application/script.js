let modal = document.querySelector("#modal");
let input = document.querySelector("#input");
let modalBtn = document.querySelector("#modal_btn");
// console.log(modalBtn);
let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
// console.log(btn);

btn.addEventListener("click", () => {
  // console.log(btn);
  modal.style.transform = "translateY(-10px)";
  input.focus();
});
input.addEventListener("focus", () => {
  enterKey();
});
function enterKey() {
  document.querySelector("input").addEventListener("keydown", (e) => {
    // console.log(event);

    if (e.key == "Enter") {
      content.innerHTML = input.value;
    }
  });
}
modalBtn.addEventListener("click", () => {
  content.innerHTML = input.value;
});
