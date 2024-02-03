function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const slides = document.querySelector(".carousel__inner");
  const width = slides.offsetWidth;
  const slidesTotal = slides.childElementCount;

  let position = 0;
  arrowLeft.style.display = "none";

  arrowRight.addEventListener("click", () => {
    position += width;
    slides.style.transform = `translateX(-${position}px)`;
    arrowLeft.style.display = "";
    if (position === (slidesTotal - 1) * width)
      arrowRight.style.display = "none";
  });

  arrowLeft.addEventListener("click", () => {
    position -= width;
    slides.style.transform = `translateX(-${position}px)`;
    if (position === 0) arrowLeft.style.display = "none";
    arrowRight.style.display = "";
  });
}
