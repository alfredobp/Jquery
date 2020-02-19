
$(document).ready(function () {

    $('.area').droppable({

        drop: function (ui) {
            console.log(ui.originalEvent.target.innerHTML)
        }
    });
    $('.elemento').draggable();

});