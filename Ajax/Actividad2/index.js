


$(() => {
    $('#boton').on('click', function () {
        var curso = document.getElementsByTagName("input")[0].value;
        console.log(curso);
        $('#boton').off();
        $.get("servidor.php")
            .done( function (datos) {

                var curso = ($('input').val()).toUpperCase();


                var eleccion = 0;

                if (curso == 'DAW1') {
                    eleccion = 0;
                } else if (curso == 'DAW2') {
                    eleccion = 1;
                } else {

                    alert("error, no existe")
                    return;
                }
                // curso ? ('DAW1': 'DAW2' ? eleccion = 0 : eleccion = 1;
                $('p').append("<p>Listado de alumnos matriculados en " + curso + " son: </p>")
                for (let index = eleccion; index <= eleccion; index++) {
                    for (let index2 = 0; index2 < datos[0].length; index2++) {

                        $(`#DAW${index + 1}`).append(`<li>
                Nombre: ${datos[index][index2].nombre}.
                ,DNI: ${datos[index][index2].dni}.
                ,Formación: ${datos[index][index2].acceso}.</li>`);
                    }

                }
            });

    });
});