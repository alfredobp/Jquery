$(() => {
    $('#boton').on('click', function () {
        var curso = document.getElementsByTagName("input")[0].value;
        console.log(curso);
        $('#boton').off();
        $.get("servidor.php")
            .done(function (datos) {
                var curso = ($('input').val()).toUpperCase();
                // console.log(curso)

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
                $('div').append("<p>Listado de alumnos matriculados en " + curso + " son: </p>")
                $('div').append('<table id="tabla" border=1px; ><th> Nombre</th> <th> DNI </th> <th> Formación </th><table>')

                for (let index = eleccion; index <= eleccion; index++) {

                    for (let index2 = 0; index2 < datos[0].length; index2++) {
                        $('tr:last').after(`<tr><td>
                                    Nombre: ${datos[index][index2].nombre}</td>
                                    <td>DNI: ${datos[index][index2].dni}</td>
                                    <td>Formación: ${datos[index][index2].acceso}.</td><tr>`);
                    }


                }
            });
    });
});