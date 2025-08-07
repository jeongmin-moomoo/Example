// 장바구니 정보를 저장할 객체 (예: { Coffee: { price: 3000, count: 2 }, ... })
const cart = {};


// HTML에서 메뉴 영역을 가져옴 (버튼들이 있는 div)
const menu = document.querySelector("#menu");

// 장바구니 항목들을 보여줄 div
const cartDisplay = document.querySelector("#cart");

// 총액(합계 금액)을 표시할 span 요소
const totalDisplay = document.querySelector("#total");


// 메뉴에서 버튼이 클릭되었을 때 실행되는 이벤트 핸들러 등록
menu.addEventListener("click", (event) => {
    // 어떤 요소를 클릭했는지 확인 (디버깅용 로그)
    console.log(event.target.tagName);

    // 만약 클릭된 요소가 버튼이면
    if(event.target.tagName === "BUTTON") {

        // 해당 버튼에서 data-name 속성 값을 가져옴 (예: "Coffee")
        const name = event.target.getAttribute("data-name");

        // 해당 버튼에서 data-price 속성 값을 가져옴 (문자열 형태, 예: "3000")
        const price = event.target.getAttribute("data-price");

        // 장바구니(cart)에 이미 이 항목(name)이 있으면
        if(cart[name]) {
            // 개수(count)만 1 증가
            cart[name].count++;
        }  
        else {
            // 처음 추가되는 항목이라면 객체로 만들어 저장
            cart[name] = { price, count: 1 };
        }

        // 장바구니 및 총액 UI 업데이트 함수 호출
        updateCart(); 

        // 장바구니 상태를 콘솔에 출력 (디버깅용)
        console.log(cart);
    }
});



// 장바구니 내용과 총액을 실제 HTML에 출력해주는 함수
function updateCart() {
    // 장바구니를 처음부터 다시 그림 → 기존 내용을 모두 지움
    cartDisplay.innerHTML = "";

    // 총합 금액을 저장할 변수 초기화
    let total = 0;

    /*
     for...in 반복문:
     cart 객체 안의 각 항목(key값, 즉 name)을 하나씩 꺼내서 처리
     예: name = "Coffee", cart[name] = { price: 3000, count: 2 }
    */
    for (const name in cart){
        // 구조 분해 할당: cart[name]에서 price와 count를 꺼냄
        const { price, count } = cart[name];

        // 총합 계산: (가격 × 수량)을 누적해서 더함
        total += price * count;

        // 새 div 요소를 생성해서 하나의 항목을 표시할 준비
        const item = document.createElement("div");

        // div 안에 들어갈 텍스트 설정
        // 예: "Coffee x2 (6,000원)"
        item.textContent = `${name} x${count} (${(price * count).toLocaleString()}원)`;

        // 완성된 item div를 장바구니 영역에 추가
        cartDisplay.appendChild(item);
        // 위 코드는 total 금액을 세자리 콤마 포함해서 보여줌 (예: 12,000)
        totalDisplay.textContent = total.toLocaleString(); 
        
    }


}
