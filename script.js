// إخفاء شاشة البداية بعد 5 ثوانٍ
document.addEventListener("DOMContentLoaded", () => {
    const splash = document.getElementById("splash");
    setTimeout(() => {
        splash.classList.add("hidden");
    }, 5000); // 5000 ميلي ثانية = 5 ثوانٍ
});
