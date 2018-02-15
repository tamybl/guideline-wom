$(document).ready( function () {
  $('.wm-nav ul li').click(function (e) {
    e.preventDefault();
    var href = $(this).find('a').attr('href');
    $(".wm-content").stop().animate({ scrollTop: $(href).position().top }, 1000);

    $('.wm-nav ul').find('li').removeClass('active');
        $('.wm-nav ul li').find('[href="'+href+'"]').parent().addClass('active');
  })
  /*$('.wm-content .wm-text').scroll( function () {
    if ($(this).find(id).position() <= 33) {
      console.log('Estoy en la seccion'+href);
    }
  })*/


  
})


