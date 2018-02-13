$(document).ready( function () {

  goToLink('.btn-tipografia', '#tipografia');
  goToLink('.btn-headlines', '#headlines');

  
})

function goToLink(classbtn, id) {
    $(classbtn).click( function () {
    $(".wm-content").animate({ scrollTop: $(id).offset().top }, 1200);
    })
  }

