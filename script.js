// عند تحميل الصفحة
window.onload = function () {
  // شاشة البداية
  const loadingScreen = document.getElementById('https://f.top4top.io/p_3309sy5zu1.png');
  const mainContent = document.getElementById('https://f.top4top.io/p_3309sy5zu1.png');

  // إظهار شاشة البداية لمدة 10 ثوانٍ
  setTimeout(() => {
    // تلاشي شاشة البداية
    loadingScreen.style.transition = 'opacity 1s ease';
    loadingScreen.style.opacity = '0';

    // بعد انتهاء التلاشي، أخفِ شاشة البداية وأظهر الصفحة الرئيسية
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      mainContent.style.display = 'block';
    }, 1000); // 1 ثانية لتلاشي الشاشة
  }, 10000); // 10 ثوانٍ
};
