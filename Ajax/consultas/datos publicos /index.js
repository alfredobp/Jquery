$(document).ready(function () {
    var telefono = [];



    $(function () {
        listarMunicipios();
        $('#municipio').on('change', function () { listarMunicipios() });
    });

    function listarMunicipios() {
        $.post("http://nexo.carm.es/nexo/archivos/recursos/opendata/json/Farmacias.json")
            .done(function (datos) {
                // var json = JSON.parse(datos);
                console.log(datos);
                $.each(datos, function (codigo, nombre) {
                    $("#municipio2").append(`<option value="${nombre.Municipio}">${nombre.Municipio}</option>`);

                });

            })
            .fail(function (request, errorMessage) {
                alert('Error: ' + errorMessage);
            });
    }

    var municipioBus = '';
    $('select').on('change', function name(params) {
        municipioBus = $('select').val()
        console.log(municipioBus)
    })
    


    $('#carga').click(function (e) {

        $.ajax({
            type: 'POST',
            dataType: 'json',
            // data: usuario,
            url: 'http://nexo.carm.es/nexo/archivos/recursos/opendata/json/Farmacias.json',
            beforeSend: function () {
                console.log('enviando...')
            },
            success: function (response) {
                for (let index = 0; index < 100; index++) {
                    if (response[index].Municipio == municipioBus) {
                        $('#ppal').append('<tr> <td>' + response[index].Nombre + '</td></tr>')
                        $('#municipio').append('<tr><td>' + response[index].Municipio + '</td> </tr>')
                        $('#telefono').append('<tr><td>' + response[index].Teléfono + '</td> </tr>')
                        $('#img2').css('width','800px')
                        $('#img2').append('<tr><td> <img id="'+response[index]['Foto 1']+'"></td></tr>')
                         $('[id="'+ (response[index]['Foto 1'])+'"]').attr("src",response[index]['Foto 1']).css('width','200px')
                        telefono.push(response[index].Teléfono);

                    }
                    // console.log(response[0])

                    //   console.log(telefono[index])
                }

            },
            error: function () {
                console.log("error")
            },
            done: function () {
                // console.log(telefono[1])
            },
            timeout: 2000,

        })

        return false;
    });

    $('#validar').click(function () {
        for (let index = 0; index < telefono.length; index++) {
            if (telefono[index] == '968153781') {
                alert("ese telefono existe")
                // console.log(telefono[index])
            }
            // else{
            //     alert(
            //         "no se encuentra"

            //     )
            //     return false
            // }

        }
    })


})



