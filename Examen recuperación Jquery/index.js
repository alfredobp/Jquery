$(document).ready(function () {


    $('body').append('<div></div>').append("<fieldset> <button> Login</button></fieldset>")
    $('button:eq(0)').addClass('login');
    $('div').addClass('intro')


    $('.login').click(function () {
        modoUsuario();
    })


    $('.intro').append("<fieldset> <legend> Datos usuario </legend> <p> Bienvenido a esta web!  </p> <p>Pulsa login para entrar como usuario registrado </p> ")


    function modoUsuario() {
        $('.intro').remove()
        $('.login').hide()
        $('body').append("<div>").append("<fieldset> <button> Logout</button> <button> Guardar datos</button> <button> Modo Administrador</button></fieldset>").addClass('sig')
        $('div').prepend(" <fieldset> <legend> Datos usuario</legend> </fielset>").addClass('sig2');
        $('.sig2').append('<p>Usuario:<input type="text"> ').append('<p>Nombre Completo: <input type="text"> ').append('<p> Correo Electrónico: <input type="mail"> ')
        validar()


        $('button:eq(2)').click(function () {

            alert("Los datos han sido guardados")
        })

        $('button:eq(3)').click(function () {
            comprobarNombre();
            modoAdministrador();
        })




    }


    function modoAdministrador() {

        $('div').remove();
        $('button').hide();
        $('body').append("<div>").append("<fieldset> <button> Logout</button> <button> Guardar datos</button> </fieldset>").addClass('sig')
        $('div').prepend(" <fieldset> <legend> Datos usuario</legend> </fielset>").addClass('sig2');
        $('.sig2').append('<p>Usuario:<input type="text"> ').append('<p>DNI:<input type="text"> ').append('<p>Nombre Completo: <input type="text"> ')
            .append('<p> Correo Electrónico: <input type="mail"> ');
        validar();
        $('button:contains("Logout")').click(function () {
            $('div').remove()
            $('button').remove()
            $('body').append('<h1> Ha finalizado la sesión')

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

        var nombre = $('input:eq(0)').val()
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
                    if (nombre == element[0].nombre) {
                        alert('correcto')
                    }
                    else{
                        console.log(element[0].nombre)
                    }
                
        });
     
        if (nombre == response[0][0].nombre) {
            alert('correcto')
        }
    },
    error: function () {
        console.log("error")
    },
    timeout: 2000,

        })
    
    }
    
});




