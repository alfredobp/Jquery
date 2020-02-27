$(document).ready(function () {


    $('#comienzo').append('<div></div>').append("<fieldset> <button> Login</button></fieldset>")
    $('button:eq(0)').addClass('login');
    $('div:eq(1)').addClass('intro')

    $('.login').click(function () {
        modoUsuario();
    })
    $("#menu").menu();
    $("#tabs").tabs();

    $('.intro').append("<fieldset> <legend> Datos usuario </legend> <p> Bienvenido a esta web!  </p> <p>Pulsa login para entrar como usuario registrado </p> ")

    $('#tabs').click(function (ui) {
        ui.originalEvent.target.innerHTML = "eooo";
        //   console.log(local)

    })

    $(Document).click(function () {
        
        BARRA();
    })

    function BARRA() {
        var progressbar = $("#progressbar"),
        progressLabel = $(".progress-label");

        progressbar.progressbar({
            value: false,
            change: function () {
                progressLabel.text(progressbar.progressbar("value") + "%");
            },
            complete: function (event) {
                event.preventDefault();
                alert("!ACABAS DE MANDAR TODA TU INFORMACION!")
                progressLabel.text("Complete!");
            }
        });

        function progress() {
            var val = progressbar.progressbar("value") || 0;

            progressbar.progressbar("value", val + 2);

            if (val < 99) {
                setTimeout(progress, 80);
            }
        }

        setTimeout(progress, 3000);
    }

    $('#borrar').click( function () {
        $( "#dialog-confirm" ).dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
              "Delete all items": function() {
                $( this ).dialog( "close" );
              },
              Cancel: function() {
                $( this ).dialog( "close" );
              }
            }
          }); 
    })
    

    function modoUsuario() {
        $('.intro').remove()
        $('.login').hide()
        $('#comienzo').append("<div>").append("<fieldset> <button> Logout</button> <button> Guardar datos</button> <button> Modo Administrador</button></fieldset>").addClass('sig')
        $('div:eq(1)').prepend(" <fieldset> <legend> Datos usuario</legend> </fielset>").addClass('sig2');
        $('.sig2').append('<p>Usuario:<select id="seleccion"> <option></select>').append('<p>Nombre Completo: <input type="text"> ').append('<p> Correo Electrónico: <input type="mail"> ')
        validar()
        listarUsuarios()


        $('#seleccion').addClass('hola')
        $('button:eq(2)').click(function () {

            alert("Los datos han sido guardados")
        })

        $('button:eq(3)').click(function () {
            comprobarNombre();
            //  modoAdministrador();
        })




    }


    function modoAdministrador(nombre, usuario, email) {

        $('div:eq(1)').remove();
        $('button').hide();
        $('#comienzo').append("<div>").append('<fieldset><button> Logout</button> <button> Guardar datos</button> </fieldset>').addClass('sig')
        $('div:eq(1)').prepend("<fieldset> <legend> Datos usuario:" + '<p>' + nombre + '</p>' + '</legend> </fielset>').addClass('sig2');
        $('.sig2').append('<p>Usuario:<input type="text" value=' + usuario + '> ').append('<p>DNI:<input type="text">').append('<p>Nombre Completo: <input type="text" value=' + nombre + '> ')
            .append('<p> Correo Electrónico: <input type="text" value=' + email + '> ');
        validar();
        $('button:contains("Logout")').click(function () {
            $('div:eq(1)').remove()
            $('fieldset').remove()
            $('button').remove()
            $('#comienzo').append('<h1> Ha finalizado la sesión')

        })


    }

    var regexemail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
function validar() {

    $('input').change(function (correcto) {


        if ($(this).val().length < 2) {
            console.log('No puede estar vacío')
            $(this).css("border", "2px solid red")
            return false;

        }


        if ($(this).is('[type="mail"]') && $('[type="mail"]').val().length > 0) {

            if (!regexemail.test($('[type="mail"]').val())) {
                $(this).css({
                    border: '2px solid red',
                    color: 'red',

                })
                $(this).val("El formato de correo no es el correcto")
                $('button:eq(2)').attr('disabled', 'true')
                return false
            }
            else {
                $(this).css({
                    border: '2px solid green',
                    color: 'green',

                })

                $('button:eq(2)').attr('enabled', 'true')

            }
        }
        return true;


    })


}


function comprobarNombre() {

    var usuario = $('input:eq(0)').val()
    var nombre = $('input:eq(1)').val()
    var email = $('input:eq(2)').val()
    $.ajax({
        type: 'POST',
        dataType: 'json',
        // data: nombre,
        url: 'http://localhost:8001/servidor.php',
        beforeSend: function () {
            console.log('enviando...')
        },
        success: function (response) {
            response.forEach(element => {
                console.log(element[0].nombre)
                if (usuario == element[0].nombre) {
                    console.log('hola')
                    alert('correcto')
                    modoAdministrador(usuario, nombre, email)
                }
                else {
                    console.log(usuario)
                }

            });

            // if (nombre == response[0][0].nombre) {
            //     alert('correcto')
            // }
        },
        error: function () {
            console.log("error")
        },
        timeout: 2000,

    })

}



function listarUsuarios() {
    $.post('http://localhost:8001/servidor.php')
        .done(function (datos) {
            // var json = JSON.parse(datos);


            $.each(datos, function (codigo, nombre) {
                // console.log(datos[0])
                console.log(datos[0][codigo].nombre);
                $('select').append(`<option value="${datos[codigo][codigo].nombre}">${datos[codigo][codigo].nombre}</option>`);

            });

        })
        .fail(function (request, errorMessage) {
            alert('Error: ' + errorMessage);
        });
}

var municipioBus = '';
$('#seleccion').on('change', function name(params) {
    municipioBus = $('select').val()
    console.log(municipioBus)
})
    


});




