$(function(){    
    // 탭메뉴 
    $('.tab-nav li').click(function(e){
        e.preventDefault();
        $('.tab-nav li').removeClass('active');
        $(this).addClass('active');

        divHeight();

        var id=$(this).children('a').attr('href');
        
        $('.tab-contents > div').hide();
        $(id).show();

        if($(this).find('a').attr('href')=='#tab2'){
            $('.nav span').css('margin-left','50%');
        }else{
            $('.nav span').css('margin-left',0);
        }
    })


    // 높이잡기
    var windowH;
    var topH;
    var tabH;
    var bottomH;    
    var divH;
    
    $(window).resize(function(){
        divHeight();
    }).resize();

    function divHeight(){
        windowH=$(window).height();
        topH=$('header').height();
        tabH=$('.tab-nav').height();
        bottomH=$('.bottomNav').height();        
        divH=windowH-(tabH+topH+bottomH);
        // console.log(windowH, tabH, topH, bottomH, divH);
        $('.tab-contents').height(divH);
    }

    // 생리컵 사용중/사용완료 
    $('#tab1 .wrap').each(function(){
        if($(this).hasClass('off')){
            $(this).find('i').removeClass('icon-wcupG').addClass('icon-wcupB');
        }
    })

    // 로그인
    $('.circle span').click(function(){
        $('.circle i').removeClass('icon-logout').addClass('icon-login');
        $('.circle').addClass('active');
        $('.circle span').addClass('active').text('홍길동');
        $('.circle button').addClass('active');
    })
    $('.circle button:last-child').click(function(){
        $('.circle i').removeClass('icon-login').addClass('icon-logout');
        $('.circle').removeClass('active');
        $('.circle span').removeClass('active').text('Login');
        $('.circle button').removeClass('active');
    })

    // 오늘날짜
    var dt = new Date();
    var day=dt.toISOString().substring(2,10).replace(/-/g,'.');
    console.log(day);
    $('#today').val(day);
    
    // 나의건강 내용추가
    $('#tab2 .add button').click(function(){
        var weight=$('.add .weight').val();
        var tem=$('.add .tem').val();
        console.log(weight,tem);

        if(weight=='' || tem==''){
            $('.pop').fadeIn(function(){
                $(this).delay(500).fadeOut();
            });
        }else{
            $('.ex').before(
                `<div class="box">
                    <span>`+day+`</span>
                    <span>`+weight+`kg`+`</span>
                    <span>`+tem+`℃`+`</span>
                    <button class="icon icon-pen"></button>
                </div>`
            );
        }

    })
    

        
    


})