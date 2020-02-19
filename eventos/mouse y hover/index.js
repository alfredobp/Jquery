$(document).ready(function () {

  // $('.caja').mouseover(function () {
  //   $(this).css("background","red")
  // });
  // $('.caja').mouseout(function () {
  //   $(this).css("background","green").css("transition",'2000ms')
  // });
  $('.caja').click(cambia1)


  $('.caja').dblclick(cambia2)
  
  function cambia1() {
    $(this).css("background","green")
  }

  function cambia2() {
    $(this).css("background","red")
  }

});