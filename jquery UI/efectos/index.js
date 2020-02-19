

$(document).ready(function () {
$('button').click(function () {
  // $('div').toggle("fade")
  // $('div').toggle("explode")
  // $('div').toggle("scale")
  $('div').toggle("shake",{
    percent: 50,
    backgroundColor: "green",

  },400)
  
  
})

});
