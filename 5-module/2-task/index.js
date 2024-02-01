function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.getElementById("text");

  button.onclick = () => {
    text.classList.toggle("toggle-text-button");
    text.hidden = !text.hidden;
  };
}
