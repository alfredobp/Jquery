$(document).ready(function () {


  $('a').each(function (index) {
    console.log($(this).val)
    $(this).html($(this).attr("href"));
    // $(this).text($(this).attr("href"));
  })


  $('button').click(function () {
   var nuevo= $('#añade').val();
   
   $('ul').append('<li> <a href='+nuevo+'>'+nuevo+'</a>'+'</li>')
     
  console.log('[href="'+$('#añade').val()+'"]')




  $('[href="'+$('#añade').val()+'"]').attr("target","_blank");

  // $('[href="'+$('#añade').val()+'"]').css("bacground","green");

  console.log($('[href="'+$('#añade').val()+'"]').length)
  })


});

    