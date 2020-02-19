$(document).ready(function () {
  
  $('[href="google.es"]').css('color','red');
  $('[href="yahoo.es"]').css('color','green');
  $('[href="terra.es"]').css('color','blue').hover(function () {
    $('[href="google.es"]').css('font-size','30px')
        
  });
  $('#target').find('.prueba').css("color","green")
});