var swiper = new Swiper(".my", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",  // ← 이거 고쳤어요!
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

                           //(대상,어떻게)