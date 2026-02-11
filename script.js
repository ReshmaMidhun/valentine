const noBtn = document.getElementById("noBtn");
const buttonContainer = document.querySelector(".buttons");

noBtn.addEventListener("mouseover", moveButton);

function moveButton() {
    const containerWidth = buttonContainer.offsetWidth;
    const containerHeight = buttonContainer.offsetHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = containerWidth - btnWidth;
    const maxY = containerHeight - btnHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

function sayYes() {
    window.location.href = "second.html";
}
