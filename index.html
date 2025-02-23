let currentIndex = 0;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const categoryContainer = document.querySelector('.category-container');
const totalCategories = document.querySelectorAll('.category-card').length;

const itemsToShow = 4;
const itemWidth = 481.25; // عرض كل قسم

// تحريك الأقسام عند الضغط على الأزرار
function moveSlider() {
    categoryContainer.style.transform = translateX(-${currentIndex * itemWidth}px);
}

// زر التالي
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCategories - itemsToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    moveSlider();
});

// زر السابق
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCategories - itemsToShow;
    }
    moveSlider();
});

// إضافة التمرير باللمس
let startX = 0;
let isDragging = false;

categoryContainer.addEventListener('mousedown', (e) => {
    startX = e.pageX;
    isDragging = true;
});

categoryContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const moveX = e.pageX - startX;
    categoryContainer.style.transform = translateX(${moveX - (currentIndex * itemWidth)}px);
});

categoryContainer.addEventListener('mouseup', () => {
    isDragging = false;
    const moveX = parseInt(categoryContainer.style.transform.replace('translateX(', '').replace('px)', ''));
    if (moveX > 100) {
        currentIndex--;
    } else if (moveX < -100) {
        currentIndex++;
    }
    moveSlider();
});
