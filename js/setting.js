$(function(){
    // 비밀번호 설정
    // $('.keypad .num').click(function(){
    //     $('.circle span').addClass('active');
    // });
    // $('.keypad .delete').click(function(){
    //     $('.circle span').removeClass('active');
    // });
    var count=0;
    var password=[];        
    $(".keypad li").click(function(){
        if($(this).hasClass('num')){
            count++;            
            password.push($(this).text());            
        }
        if($(this).hasClass('delete')){
            count--;            
            password.pop();
        }   
        if(count>3){count=4;}   
        if(count<0){count=0;}  
        
        $(this).parents('.popup-pw1').find('.circle span').removeClass('active');
        for (let index = 0; index <= count-1; index++) {
            $(this).parents('.popup-pw1').find('.circle span').eq(index).addClass('active');
        }
        console.log(password);                
        
        return false;        
    });

    // 취소버튼 누르면 뒤로가기
    $('.keypad .cancle').click(function(){
        window.history.back();
    });

    // 비밀번호 변경 누르면 팝업띄우기
    $('.pw-change').click(function(){
        $('.popup-pw1').show();
    });
    // 비밀번호 삭제 누르면 팝업띄우기
    $('.pw-delete').click(function(){
        $('.popup-pw1').show();
    });

    // 자주하는 질문
    $('.accordion li a').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).next().slideUp();
            $(this).find('i').removeClass('icon-dropup').addClass('icon-dropdownG');
        }else{
            $('.accordion a').removeClass();
            $('.accordion .box').slideUp();
            $('.accordion i').removeClass('icon-dropup').addClass('icon-dropdownG');
            $(this).find('i').removeClass('icon-dropdownG').addClass('icon-dropup');
            $(this).addClass('active');
            $(this).next().slideDown();

        }
    });

    // 초기화 버튼 클릭 시
    $('.set-menu a.reset').click(function(){
        $('.popup-reset').show();
        $('.popup-bg').show();
    });
    $('.popup-bg').click(function(){
        $('.popup-reset').hide();
        $('.popup-bg').hide();
    });

    // 이전버튼 클릭 시
    $('.icon-arrowL').click(function(){
        window.history.back();
    });
})