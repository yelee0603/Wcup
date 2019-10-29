$(function(){
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable:true,       
      },
      allowTouchMove:false
    });
    

    $('button.bottomBtnG').mousedown(function(){
      $(this).addClass('active');
    });

    $('.addCup').click(function(){
      $('.popup-addCup1').show();
    })

    $('.item-swipe').swipeTo({
      minSwipe: 100,
          angle: 10,
          selector:'.item-swipe',
      wrapScroll: '#register',
      binder: true,
      swipeStart: function() {
        console.log('start');
      },
      swipeMove: function() {
        console.log('move');
      },
      swipeEnd: function() {
        console.log('end');
      },
    });	
    deleteItem();
    getIe();


    $(".select select").change(function () {
      var changeTxt = $(this).find("option:selected").text();
      $(this).parent().find(".txt").text(changeTxt);
      });
})
var deleteItem = function() {
	var deleteItemFnc = $('#register').on('click tap', '.btn-delete', function(e) {
		e.preventDefault();
		var that = $(this);
		that.parent().parent().fadeOut('500');
  })

  $('.intro3 button').click(function(){
    $('.set-end').show();
  })

  $('.loading').fadeOut(1500);
  
}