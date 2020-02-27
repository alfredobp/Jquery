$(document).ready(function () {

 console.log($('p').css(['width','color']));
 if(($('p').css('color')==="rgb(0, 0, 0)")){
   console.log("ee")
 }

$('p').css({
  color:'black',
  backgroundColor: 'red',
  fontWeight:'bold',
  fontSize:'23px',
  width:'60px',
})

});

    