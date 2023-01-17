$(function(){

  //kor,eng_btn event
  $('.kor').click(function(e){

    e.preventDefault();

    $('.kor').css('display','none');
    $('.eng').css('display','block');

  });

  $('.eng').click(function(e){

    e.preventDefault();

    $('.kor').css('display','block');
    $('.eng').css('display','none');
  });


  //ham_btn event
  $('.ham').click(function(e){

    e.preventDefault();

    $(this).toggleClass('active');
    $('.side_lnb_wrap').toggleClass('show');

  });

  //side_lnb event
  $('.detail_menu .side_menu_list>li').click(function(e){

    e.preventDefault();
    $(this).children('ul').stop().slideToggle();
    $(this).stop().toggleClass('rotation');
  });


  //menu fix
  let outHeader = $('.out_header');
  $(window).scroll(function(){
    if($(this).scrollTop()>0){
      outHeader.addClass('sticky');
      $('.web_logo').css('padding','10px 0');
      $('.main_lnb>li>a').css('margin-top','0');
    }else{
      outHeader.removeClass('sticky');
      $('.web_logo').css('padding','30px 0 0');
      $('.main_lnb>li>a').css('margin-top','30px');
    };
  });

  //footer_event

  $('.family_site_btn').click(function(){
    $(this).css('display','none');
    $('.family_site_close').css('display','block');
    $('.family_site_list').css('display','block');
  });

  $('.family_site_close').click(function(){
    $(this).css('display','none');
    $('.family_site_btn').css('display','block');
    $('.family_site_list').css('display','none');
  });

})