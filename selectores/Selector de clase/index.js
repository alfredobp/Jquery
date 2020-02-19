$(document).ready(function () {
 
    var rojo = $('.rojo');

    rojo.css("background", "red").css("color","white")

    var amarillo = $('.amarillo');

    amarillo.css("background", "yellow").css("color","red").css('font-size', '20px')

    $('.rojo').css('font-weight','bold').css('border','5px solid black')


    $('.amarillo').addClass('rojo')

})