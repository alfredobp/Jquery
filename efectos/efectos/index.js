$(document).ready(function () {

$('#mostrar').click(function () {
  // $('.caja').css('display','block')
  // $('.caja').show('slow')
  $('.caja').fadeTo('slow',0.6)
})

$('#ocultar').click(function () {
  // $('.caja').css('display','none')
  // // $('.caja').hide('slow')
  // $('.caja').fadeOut('fast')
  $('.caja').fadeTo('slow',0.2)
 
})


});

    