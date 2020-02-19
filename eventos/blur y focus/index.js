$(document).ready(function () {

  // $('.caja').mouseover(function () {
  //   $(this).css("background","red")
  // });
  // $('.caja').mouseout(function () {
  //   $(this).css("background","green").css("transition",'2000ms')
  // });
  $('.caja').focus(cambia1)
  $('.caja').blur(cambia2)
  


  function cambia1() {
    $(this).css("border","3px solid  green")
  }

  function cambia2() {
    $(this).css("border","3px solid  red")
  }

});