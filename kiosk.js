const products = [
  { name: "콜라", price: 1500, category: "drink", image: "사진/펩시.jpg" },
  { name: "사이다", price: 1500, category: "drink", image: "사진/사이다.jpg" },
  { name: "아이스크림", price: 2000, category: "dessert", image: "사진/와.jpg" },
  { name: "붕어빵", price: 2500, category: "dessert", image: "사진/붕어빵.jpg" },
  { name: "핫도그", price: 3000, category: "hotfood", image: "사진/핫도그.jpg" },
  { name: "라면", price: 4000, category: "hotfood", image: "사진/라면.jpg" },
];





let cart = {};

function renderProducts(category = "all") {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  filtered.forEach(product => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price.toLocaleString()}원</p>
        <button onclick="addToCart('${product.name}', ${product.price})">+</button>
      </div>
    `;
    productList.appendChild(slide);
  });

  swiper.update(); // 슬라이드 다시 계산
}

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].count++;
  } else {
    cart[name] = { price, count: 1 };
  }
  updateCart();
}

function removeFromCart(name) {
  if (cart[name]) {
    cart[name].count--;
    if (cart[name].count <= 0) {
      delete cart[name];
    }
    updateCart();
  }
}

function deleteItem(name) {
  delete cart[name];
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");
  cartItems.innerHTML = "";
  let total = 0;

  for (const name in cart) {
    const { price, count } = cart[name];
    total += price * count;

    const item = document.createElement("div");
    item.innerHTML = `
      ${name} x${count} (${(price * count).toLocaleString()}원)
      <span class="cart-controls">
        <button onclick="addToCart('${name}', ${price})">+</button>
        <button onclick="removeFromCart('${name}')">-</button>
        <button onclick="deleteItem('${name}')">삭제</button>
      </span>
    `;
    cartItems.appendChild(item);
  }

  totalDisplay.textContent = total.toLocaleString();
}

document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    renderProducts(category);
  });
});

document.getElementById("checkout-btn").addEventListener("click", () => {
  alert("결제 완료! 감사합니다.");
  cart = {};
  updateCart();
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 6,
}
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",

});




// 첫 로딩 시 전체 카테고리
renderProducts();
