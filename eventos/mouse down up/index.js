$(document).ready(function () {

  // $('.caja').mouseover(function () {
  //   $(this).css("background","red")
  // });
  // $('.caja').mouseout(function () {
  //   $(this).css("background","green").css("transition",'2000ms')
  // });
  $('.caja').mouseup(cambia1)
  $('.caja').mousedown(cambia2)

  $(document).mousemove(function (params) {
    console.log(event.clientX + " / " + event.clientX)

    $('#sigue').css("left", event.clientX);
    $('#sigue, #sigue2').css("top", event.clientY);
    $(this).css('cursor','none')


  })



  function cambia1() {
    $(this).css("border", "3px solid  green")
  }

  function cambia2() {
    $(this).css("border", "3px solid  red")
  }

});