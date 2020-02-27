$(document).ready(function () {

    $('#a2').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#b2').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#c2').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#d2').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#e2').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#f2').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#g2').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#h2').append(' <span id="peon_blanco_4">&#9817;</span>')

    $('#a7').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#b7').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#c7').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#d7').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#e7').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#f7').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#g7').append(' <span id="peon_blanco_4">&#9817;</span>')
    $('#h7').append(' <span id="peon_blanco_4">&#9817;</span>')


$('span:contains("♙")').each(function () {
    $(this).click(function () {
        alert('Soy un peón')
    })
   
})
$('.sortable').sortable();
console.log($("span:contains('♙')"))

$( "#datepicker" ).datepicker({
    showButtonPanel: true
  });

  console.log($('#datepicker').val())
});