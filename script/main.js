$(function(){

    //팝업서식
    $('.popup i.fas').click(function(){
        $('.popup').animate({'top':'25%'},300).delay(100).animate({'top':'-100%','opacity':'0'},500);
    });

    //스킬바
    $('.skills').hover(function(){
      $('.skills').addClass('skill_hover');
      $(this).addClass('eachskill_hover');
    }, function(){
      $('.skills').removeClass('skill_hover');
      $(this).removeClass('eachskill_hover');
    });

    console.log('hi');
    // var s_num = $('.section3').offset.top;
    // console.log(s_num);

    //섹션별 스크롤 이벤트
    // $(window).scroll(function(){
    //   console.log('scroll');

    //   var sPos = $(window).scrollTop();
    //   var s_num = $('#main > section').index();
    //   console.log(s_num);
    //   console.log(sPos);

    // });

    console.log('bye');


    //mywork 서브페이지 서식
    $('#sub_section > .container').fadeIn();

});