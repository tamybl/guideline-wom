$(document).ready( function () {

  $(document).scroll(function () {
    scrollSection();
  });

  if(window.screen.width < 1370) {
    console.log('Soy una pantalla pequeña');
  }

  $(window).resize(function () {
    var size = $(this).width();
    if(size < 768) {
      console.log("Soy un size pequeño");
    }
    
  })

  $('.wm-nav-content ul li').click(function (e) {
    e.preventDefault();
    var href = $(this).find('a').attr('href');
    $("html, body").stop().animate({ scrollTop: $(href).position().top }, 1000);
  });
})

function scrollSection () {
  var scrollPosition = $(document).scrollTop();
  $('.wm-content article').each(function () {
    var idTop = $(this).offset().top;
    var idBottom = ($(this).height())/2+idTop;
    if (idTop-40 <= scrollPosition && idBottom >= scrollPosition) {
      $('.wm-nav ul').find('li').removeClass('active');
      $('.wm-nav-content ul li').find('[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
}

// ver appendTo de Jquery


