document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelector(".stars");
    const progress = document.querySelector(".progress");
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");

    leftBtn.addEventListener("click", () => {
        stars.scrollBy({ left: -200, behavior: "smooth" });
        updateProgress();
    });

    rightBtn.addEventListener("click", () => {
        stars.scrollBy({ left: 200, behavior: "smooth" });
        updateProgress();
    });

    function updateProgress() {
        let scrollPercentage = (stars.scrollLeft / (stars.scrollWidth - stars.clientWidth)) * 100;
        progress.style.width = ${scrollPercentage}%;
    }
});
