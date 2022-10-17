$(function() {
  
  //햄버거 버튼
  function win() {
  let w =$(window).width()
  if(w < 1280) {
    $('.fa-solid').click(function(){
      $('.fa-solid').hide()
      $('.fa-xmark').show().css({'font-size': '45px'})
      $('#header').addClass('on')
      $('.utill_wrap').addClass('on')
      $('#gnb').addClass('on')
     
    })
    $('.fa-xmark').click(function(){
      $('#header').removeClass('on')
      $('.utill_wrap').removeClass('on')
      $('#gnb').removeClass('on')
      $('.fa-solid').show()
      $('.fa-xmark').hide()
    })  
  }
  else {}
}

  //gnb 호버
 
  $('#gnb > li').hover(function(){
    $(this).children('ul').stop().slideToggle('fast').css({'background' : '#94d8ff'})
    

  })

  //footer family_site 클릭
  var sb = 0;
  $('.family_site > button').click(function() {
    if(sb == 0) {
     
     $('.family_site ul').show();
     sb++;
     console.log(sb)
    }
    else if (sb > 0) {
      $('.family_site ul').hide();
      sb--;
      console.log(sb)
    }
    
  });

  win()
  
  // 스와이퍼
  const swiper = new Swiper('.swiper',{
    
    
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 1000,
    },
    //반응형 스와이퍼
    breakpoints: {
      980: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  })

  
  

})//ready


    



      

  

