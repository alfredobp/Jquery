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
    
            // $.post($(this).attr("action"), usuario, function (response) {
            //     console.log(response)
            // }).done(function () {
            //     alert("usuario añadido")
            // })

            $.ajax({
                type: 'POST',
                dataType: 'json',
                data: usuario,
                url:$(this).attr("action"),
                beforeSend:function () {
                    console.log('enviando...')
                },
                success: function (response) {
                    console.log(response)
                },
                error: function () {
                    console.log("error")
                },
                timeout:2000,

            })
    
            return false;
        });
    }
    else{
        alert("esta vacío")
        $('button').prop("disabled", true);
    }

    
})



