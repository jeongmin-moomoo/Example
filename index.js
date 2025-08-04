const form = document.getElementById("profileForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const previewName = document.getElementById("previewName");
const previewEmail = document.getElementById("previewEmail");
const previewMessage = document.getElementById("previewMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 제출 방지

  // 기본 메시지 초기화
  nameInput.setCustomValidity("");
  emailInput.setCustomValidity("");
  messageInput.setCustomValidity("");

  let isValid = true;

  // 필드별 유효성 검사 및 메시지 설정
  if (!nameInput.value.trim()) {
    nameInput.setCustomValidity("Please enter your name.");
    nameInput.reportValidity();
    isValid = false;
  } else if (!emailInput.value.trim()) {
    emailInput.setCustomValidity("Please enter your email.");
    emailInput.reportValidity();
    isValid = false;
  } else if (!messageInput.value.trim()) {
    messageInput.setCustomValidity("Please write a message.");
    messageInput.reportValidity();
    isValid = false;
  }

  if (!isValid) return; // 하나라도 비었으면 중단

  // ✅ 왼쪽 미리보기 적용
  previewName.textContent = nameInput.value.trim();
  previewEmail.textContent = emailInput.value.trim();
  previewMessage.innerHTML = messageInput.value.trim().replace(/\n/g, "<br>");

  // ✅ 입력 폼 초기화
  form.reset();
});
