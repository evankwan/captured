const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("checked");
})

hamburger.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
    hamburger.classList.toggle("checked");
  }
})