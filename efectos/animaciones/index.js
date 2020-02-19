$(document).ready(function () {

  $('#animar').click(function () {

    $('.caja').animate({

      marginLeft: '500px',
      marginTop: '300px',
      background: 'red',
      height: '1000px'
    }, 'slow').animate({
      borderRadius: '90px'
    }, 'slow').off();
  })



});

