// الانتظار لمدة 5 ثوانٍ قبل إخفاء شاشة البداية
window.onload = function() {
  setTimeout(function() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 5000); // 5000 ميلي ثانية = 5 ثوانٍ
};
