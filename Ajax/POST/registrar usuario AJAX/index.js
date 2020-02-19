$(document).ready(function () {

    var name= $('input[name="name"').val()
console.log(name)
    if (name.length>0) {
        $('button').prop("disabled", false);
        $('#form').submit(function (e) {

            e.preventDefault();
    
            var usuario = {
                "name": $('input[name="name"').val(),
                "web": $('input[name="web"').val()
            }
    
            $.post($(this).attr("action"), usuario, function (response) {
                console.log(response)
            }).done(function () {
                alert("usuario añadido")
            })
    
            return false;
        });
    }
    else{
        alert("esta vacío")
        $('button').prop("disabled", true);
    }

    
})






