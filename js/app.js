$(document).ready( function () {
  $('.wm-nav ul li').click(function (e) {
    e.preventDefault();
    var href = $(this).find('a').attr('href');
    //$(this).find('a').css('background-color', '#000');
    if ($(href).offset().top !== 0) {
      $(".wm-content").animate({ scrollTop: $(href).offset().top }, 1000);
    }
    
  })


  
})


