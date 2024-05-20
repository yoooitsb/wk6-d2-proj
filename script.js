$(document).ready(function(){
    for (let i = 0; i < 16; i++) {
      $('#grid').append('<div class="box"></div>');
    }
  
    $('.box').click(function() {
      $(this).toggleClass('light-grey');
    });
  });
  