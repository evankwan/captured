const animatedElements = document.querySelectorAll(".notVisible");
animatedElements.forEach(function(element) {
  element.addEventListener
})

document.addEventListener('scroll', isVisible);
window.addEventListener('load', isVisible);

function isVisible() {
  // select item and get bounding rectangle
  const elements = document.querySelectorAll(".notVisible");
  elements.forEach(function(element) {
    const rectangle = element.getBoundingClientRect();

    // test if element is on screen
    if (rectangle.top + 50 <= window.innerHeight) {
      // test if element just appeared on screen
      if (!element.classList.contains("visible")) {
        element.classList.add("visible");
        element.classList.remove("notVisible")
      }
    }
  })
}