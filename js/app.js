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
    if($(window).width() < 753) {
      toggleMenu();
    }
  });

  $('.toggle-menu').click(function () {
    toggleMenu();
  })

  $(window).resize(function () {
    var size = $(this).width();
    console.log(size);
    if(size < 752) {
      $('.wm-nav-content ul').hide();
      $('.logo img').css('width','55px');
    }
    else {
      $('.wm-nav-content ul').show();
      $('.logo img').css('width','auto');
    }
    
  })

  $('.btn-show-moreless').click(function () {
    $(this).parent().find('pre').toggleClass('code-expanded');
    $(this).find('span').text($(this).find('span').text() == 'Ver Menos' ? 'Ver Más' : 'Ver Menos');
  })

  $('.btn-copy-clipboard').click(function () {
    // Se copia el codigo que corresponde con el boton
    var copyCode = $(this).parent().find('code').text();
    //console.log(copyCode);
    // Se crea un elemento de textarea y se 
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.append(copyCode);
    textarea.select();
    /* Copy the text inside the text field */
    document.execCommand("Copy");
    document.body.removeChild(textarea);
  })
  
})

function scrollSection () {
  var scrollPosition = $(document).scrollTop();
  $('.wm-content article').each(function () {
    var idTop = $(this).offset().top;
    var idBottom = ($(this).height())/2+idTop;
    if (idTop-60 <= scrollPosition && idBottom >= scrollPosition) {
      $('.wm-nav ul').find('li').removeClass('active');
      $('.wm-nav-content ul li').find('[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
}

function toggleMenu () {
  $('.wm-nav-content ul').toggle(500);
}
