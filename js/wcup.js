$(function(){
    // 동영상 슬라이드
    var swiper = new Swiper('.swiper1', {
        loop:true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true
    });
    var swiper2;
    var swiper3;
    // 탭메뉴
    $('.tab-nav li').click(function(e){
        e.preventDefault();
        $('.tab-nav li').removeClass('active');
        $(this).addClass('active');


        var id=$(this).children('a').attr('href');
        
        $('.tab-contents > div').hide();
        $(id).show();

        if($(this).find('a').attr('href')=='#tab2'){
            $('.nav span').css('margin-left','33.33%');
        }else if($(this).find('a').attr('href')=='#tab3'){
            $('.nav span').css('margin-left','66.66%');
        }else{
            $('.nav span').css('margin-left',0);
        }

        if(id=='#tab3'){
            if(swiper2!=undefined){
                swiper2.update();
            }else{
                swiper2 = new Swiper('.swiper2', {
                    loop:true,
                    slidesPerView: 3,
                    spaceBetween: 60
                });
            }
            if(swiper3!=undefined){
                swiper3.update();
            }else{
                swiper3 = new Swiper('.swiper3', {
                    loop:true,
                    slidesPerView: 3,
                    spaceBetween: 60
                });
            }
        }
    })

    if($('#tab3 .num').text()=='1'){
        $(this).css('background','#8bcbc8');
    }

  



})

