$(document).ready(function () {
  $('#target').append("<fieldset> <legend> Configuración de partida </legend></fieldset>")

  $('fieldset').append('<p>Tiempo del que dispone cada jugador[mm:SS] <input></p>');

  $('#target').append('<br>').append('<fieldset> <legend> Acta de la partida </legend></fieldset>')


  $('fieldset:eq(1)').append('Introduce el email al que enviar el acta: <input></p> <p> Mensaje</p><textArea rows="10" cols="40"> </textArea>')

  $('fieldset:eq(1)').append('<p> <button>Enviar acta</button> <button>Reset</button> <button>Jugar Partida</button> ')

  $('textArea').addClass("inicio")

  $("button:contains('Enviar acta')").click(function () {
    window = window.open('google.es', 'emailWindow')
  }).attr('disabled', 'true')

  $("button:contains('Reset')").click(function () {
    $('input').each(function () {
      $(this).val('');
    })
    $('textArea').val('')
  })

  $("button:contains('Jugar Partida')").click(function () {

    window = window.open('jugada.html')
  })




  $('.inicio').change(function () {
    var text = $('.inicio').val()
    if (text.length >10) {
      console.log(text.length)
      $("button:contains('Enviar acta')").removeAttr('disabled');
    }
    console.log($('.inicio').val())
  })

});