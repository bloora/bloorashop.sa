Placeholder for adding interactivity (e.g., cart functionality)
console.log("Welcome to BALORA Store!");
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000, // تبديل الصورة كل 3 ثوانٍ
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
