var array=[];

$(document).ready(function () {

//  $('.lista-seleccionable').selectable();
    // $('.lista-seleccionable li').draggable();
      $('.lista-seleccionable').sortable({

        update:function (event, ui) {
           array.push(ui.item[0].innerText)
            console.log(ui.item[0].innerText)
            console.log(array)
        }
      });
});

console.log(array)