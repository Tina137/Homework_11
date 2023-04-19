let a = document.querySelector(".r");
let b = document.querySelector(".y");
a.addEventListener("click", function () {
  a.style.background = "yellow";
  b.style.background = "red";
});
b.addEventListener("click", function () {
  b.style.background = "red";
  a.style.background = "yellow";
});
