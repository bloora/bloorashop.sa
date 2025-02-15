Placeholder for adding interactivity (e.g., cart functionality)
console.log("Welcome to BALORA Store!");
var swiper = new Swiper(".mySwiper", {
    loop: true,
  const products = [
    "كتب مدرسية", "كتب إسلامية", "كتب إنجليزية", "كتب تطوير الذات",
    "جوالات سامسونج", "جوالات آيفون", "جوالات شاومي",
    "ملابس رجالية", "ملابس نسائية", "ملابس أطفال",
    "أحذية رياضية", "أحذية رسمية", "أحذية نسائية",
    "أدوات المطبخ", "أجهزة كهربائية", "أثاث المنزل"
];

function showSuggestions() {
    let query = document.getElementById("search-box").value.toLowerCase();
    let suggestionsList = document.getElementById("suggestions-list");
    suggestionsList.innerHTML = "";

    if (query.length === 0) {
        suggestionsList.style.display = "none";
        return;
    }

    let filteredProducts = products.filter(product => product.toLowerCase().includes(query));

    if (filteredProducts.length > 0) {
        suggestionsList.style.display = "block";
        filteredProducts.forEach(product => {
            let listItem = document.createElement("li");
            listItem.textContent = product;
            listItem.onclick = () => {
                document.getElementById("search-box").value = product;
                suggestionsList.style.display = "none";
            };
            suggestionsList.appendChild(listItem);
        });
    } else {
        suggestionsList.style.display = "none";
    }
}

document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-container")) {
        document.getElementById("suggestions-list").style.display = "none";
    }
});
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
