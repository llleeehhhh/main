$(function(){
  const swiper = new Swiper('.swiper', {
    // slidesPerView: 2, // 보여지는 슬라이드 수
    // slidesOffsetBefore: 53,
    // slidesOffsetAfter: 20,
    loop: true, // 슬라이드 무한 반복
    breakpoints: {
      980: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      500: {
        slidesPerView: 1,
        
      },
    }, 
   

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 1000,
    },

    



  });
})
