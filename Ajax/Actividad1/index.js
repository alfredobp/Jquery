$(() => {
    $('#boton').on('click', function () {
        $('#boton').off();
        $.get("servidor.php")
            .done(function (datos) {
                for (let index = 0; index < datos.length; index++) {
                    for (let index2 = 0; index2 < datos[0].length; index2++) {
                        console.log(datos)
                        $(`#DAW${index + 1}`).append(`<li>
                Nombre: ${datos[index][index2].nombre}.
                DNI: ${datos[index][index2].dni}.
                Acceso: ${datos[index][index2].acceso}.</li>`);
                    }}
                });
    });
});