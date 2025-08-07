const cart = {};
//장바구니 역할

const menu = document.querySelector("#menu");
const cartDisplay = document.querySelector("#cart");
const totalDisplay = document.querySelector("#total");
//html에서 가게 메뉴판 가져오기

menu.addEventListener("click",(event) => {
//메뉴판의 버튼을 누르면 자바스크립트가 감지
//event.target는 손님이 클릭한 버튼
 if (event.target.tagName === "BUTTON") {
 const name = event.target.getAttribute("data-name");
 const price = parseInt(event.target.getAttribute("data-price"));
 //손님이 누른 메뉴의 이름과 가격 버튼에서 읽어오기

 if(cart[name]) {
     cart[name].count++;
 } else{
     cart[name] = {price, count: 1 };
 }
 updateCart();
}
});

//이미 햄버거 담았으면 수량+1  / 처음담는거면 새로 만들어서 장바구니에 넣기

function updateCart() {
    cartDisplay.innerHTML="";
    let total= 0;

    for (const name in cart) {
        const {price, count } = cart[name];
        total += price * count;

        const item = document.createElement("div");
        item.textContent = `${name} x${count} (${(price * count).toLocaleString()}원)`
        cartDisplay.appendChild(item);
        
        totalDisplay.textContent = total.toLocaleString();
    }
}