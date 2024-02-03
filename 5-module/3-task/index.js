function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const slides = document.querySelector(".carousel__inner");
  const width = slides.offsetWidth;
  const slidesTotal = slides.childElementCount;

  let position = 0;
  arrowLeft.style.display = "none";

  function moveSlides(direction) {
    position += width * direction;
    slides.style.transform = `translateX(-${position}px)`;
    arrowLeft.style.display = position === 0 ? "none" : "";
    arrowRight.style.display =
      position === (slidesTotal - 1) * width ? "none" : "";
  }

  arrowLeft.addEventListener("click", () => moveSlides(-1));
  arrowRight.addEventListener("click", () => moveSlides(1));
}
