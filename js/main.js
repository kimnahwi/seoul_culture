   
$(function(){

    //kor,eng_btn event
    $('.kor').click(function(e){

        e.preventDefault();

        $('.kor').css('display','none');
        $('.eng').css('display','block')
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
    let innerHeader = $('.inner_header');
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            innerHeader.addClass('sticky')
        }else{
            innerHeader.removeClass('sticky')
        };
    });

    //lnb(W)

    $('.main_lnb>li:nth-child(1)').mouseover(function(){
        $(this).find('ul').show();
    }).mouseleave(function(){
        $(this).find('ul').hide();
    });

    $('.main_lnb>li:nth-child(2)').mouseover(function(){
        $(this).find('ul').show();
    }).mouseleave(function(){
        $(this).find('ul').hide();
    });

    $('.main_lnb>li:nth-child(3)').mouseover(function(){
        $(this).find('ul').show();
    }).mouseleave(function(){
        $(this).find('ul').hide();
    });

    $('.main_lnb>li:nth-child(4)').mouseover(function(){
        $(this).find('ul').show();
    }).mouseleave(function(){
        $(this).find('ul').hide();
    });

    $('.main_lnb>li:nth-child(5)').mouseover(function(){
        $(this).find('ul').show();
    }).mouseleave(function(){
        $(this).find('ul').hide();
    });

    $('.main_lnb>li:nth-child(6)').mouseover(function(){
        $(this).find('ul').show();
    }).mouseleave(function(){
        $(this).find('ul').hide();
    });


    //banner_swiper
    var swiper1 = new Swiper(".swiper1", {

        loop : true,

        effect: "fade",

        autoplay : {
            delay: 3000
        },

        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    $('.prev').click(function(){
        swiper1.slidePrev();
    });

    $('.next').click(function(){
        swiper1.slideNext();
    });


    //visual_main_swiper
    var swiper2 = new Swiper(".swiper2", {
        loop : true,
        effect: "fade",
        pagination: {
            el: ".visual_pagination",
            clickable: true
        },
    });

    $('.visual_prev').click(function(){
        swiper2.slidePrev();
    });

    $('.visual_next').click(function(){
        swiper2.slideNext();
    });

    //metaphor_img event 

    $('.metaphor ul li:first-child').mouseenter(function(){
        $(this).find('img').attr('src','./images/metaphor01_on.png')
    }).mouseleave(function(){
        $(this).find('img').attr('src','./images/metaphor01.png')
    })

    $('.metaphor ul li:nth-child(2)').mouseenter(function(){
        $(this).find('img').attr('src','./images/metaphor02_on.png')
    }).mouseleave(function(){
        $(this).find('img').attr('src','./images/metaphor02.png')
    })

    $('.metaphor ul li:nth-child(3)').mouseenter(function(){
        $(this).find('img').attr('src','./images/metaphor03_on.png')
    }).mouseleave(function(){
        $(this).find('img').attr('src','./images/metaphor03.png')
    })

    $('.metaphor ul li:nth-child(4)').mouseenter(function(){
        $(this).find('img').attr('src','./images/metaphor04_on.png')
    }).mouseleave(function(){
        $(this).find('img').attr('src','./images/metaphor04.png')
    })

    $('.metaphor ul li:nth-child(5)').mouseenter(function(){
        $(this).find('img').attr('src','./images/metaphor05_on.png')
    }).mouseleave(function(){
        $(this).find('img').attr('src','./images/metaphor05.png')
    })

    $('.metaphor ul li:nth-child(6)').mouseenter(function(){
        $(this).find('img').attr('src','./images/metaphor06_on.png')
    }).mouseleave(function(){
        $(this).find('img').attr('src','./images/metaphor06.png')
    })

    // contents02_swiper

    var swiper = new Swiper(".contents02_swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView : 4,
        spaceBetween : 30,
        loop : true
    });


    //contents03_event
    const tab = $('.contents03_container .contents03 .contents03_tab li');
    const noticeSheet = $('.contents03 .contents03_sheet ul');

    tab.click (function(){
        let target = $(this);
        let i = target.index();

        tab.removeClass('on');
        tab.eq(i).addClass('on');

        noticeSheet.removeClass('on_sheet');
        noticeSheet.eq(i).addClass('on_sheet');
    });


    //contents05_event

    var swiper3 = new Swiper(".swiper3", {

        loop : true,
        effect: "flip",
        grabCursor: true
    });


    //footer_event


    let familyBtn = $('.family_site_btn');

    familyBtn.click(function(){

        $(this).find('span').toggleClass('close');

        $('.family_site_list').toggle();
    });

    //news

    newsBtn = $('.footer .footer_news .news_btn');
    newsSheet = $('.footer .news_sheet');
    newsClose = $('.footer .news_sheet .news .news_close');

    newsBtn.click(function(){
        newsSheet.show();
    });

    newsClose.click(function(){
        newsSheet.hide();
    });

});