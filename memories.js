let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex <= slides.length) {
        slides[slideIndex - 1].style.display = "flex";
        setTimeout(showSlides, 3000);  // continue only if slides remain
    }
}
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    music.play();
});