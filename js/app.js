$(document).ready( function () {

  if(screen.width < 750 || $(window).width() < 750) {
    $('.wm-nav-content ul').hide();
    $('.logo img').css('width','55px');
  }

  $(document).scroll(function () {
    scrollSection();
  });

  $('.list').click(function (e) {
    e.preventDefault();
    var href = $(this).find('a').attr('href');
    $("html, body").stop().animate({ scrollTop: $(href).position().top }, 1000);
    if($(window).width() < 750) {
      toggleMenu();
    }
  });

  $('.toggle-menu').click(function () {
    toggleMenu();
  })

  $(window).resize(function () {
    var size = $(this).width();
    console.log(size);
    if(size < 750) {
      $('.wm-nav-content ul').hide();
      $('.logo img').css('width','55px');
    }
    else {
      $('.wm-nav-content ul').show();
      $('.logo img').css('width','auto');
    }
    
  })
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

function toggleMenu () {
  $('.wm-nav-content ul').toggle(500);
}

// ver appendTo de Jquery


/*  if(window.screen.width < 1370) {
    console.log('Soy una pantalla pequeña');
  }

  $(window).resize(function () {
    var size = $(this).width();
    if(size < 768) {
      console.log("Soy un size pequeño");
    }
    
  })*/