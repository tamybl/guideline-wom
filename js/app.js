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

  $('.btn-copy-clipboard').click(function (e) {
    e.preventDefault();
    var prismCode = '';
    var inputCode = '';
    // Se copia el codigo que corresponde con el boton. Verifica si es 
    prismCode = $(this).parent().find('code').text();
    inputCode = $(this).parent().find('input').val();
    if(prismCode !== '') {
      copyCode = prismCode;
    }
    else {
      copyCode = inputCode;
    }
    //console.log(copyCode);
    // Se crea un elemento de textarea y se inserta en el body
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.append(copyCode);
    textarea.select();
    // Copia el texto copiado en el textarea
    document.execCommand("Copy");
    document.body.removeChild(textarea);
  })

  $('#check-color').keyup(function () {
    var colorBase = '#cccccc';
    var inputColor = $(this).parent().find('input[type="text"]').val();
    var pattern = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
    if(pattern.test(inputColor)) {
      console.log('Es un color valido');
      $(this).parent().find('.color-box').css('background-color', inputColor);
      $(this).parent().parent().find('#check-color').css('border', '1px solid'+inputColor);
      if(inputColor.length === 4) {
        var rest = inputColor.replace(/#/g , "").split("");
        inputColor = '#'+rest[0]+rest[0]+rest[1]+rest[1]+rest[2]+rest[2];
        $(this).parent().find('input[type="color"]').val(inputColor);
      }
      else {
        $(this).parent().find('input[type="color"]').val(inputColor);
      }
    }
  })

  $('#check-color input[type="color"]').change(function () {
    var color = $(this).val();
    $(this).parent().find('.color-box').css('background-color', color);
    $(this).parent().parent().find('#check-color').css('border', '1px solid'+color);
    $('#check-color input[type="text"]').val(color);

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
