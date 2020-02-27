$(document).ready(function () {
$('li').each( function (index) {
if(index%2==0){
  $(this).css("backgroundColor","red");
}
  $(this).click(function () {
    console.log("EY")
  })

  if(index=1){
    $(this).css('color','blue');
  }
})
});