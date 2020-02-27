
		$(function () {
			listarProvincias();
			$('#provincia').on('change', function () { listarMunicipios() });
		});

		function listarProvincias() {
			$.post("./cargaProvinciasJSON.php")
				.done(function (datos) {
					var json = JSON.parse(datos);
					console.log(json);
					$.each(json, function (codigo, nombre) {
						$("#provincia").append(`<option value="${codigo}">${nombre}</option>`);
						// console.log(codigo)
					});

				})
				.fail(function (request, errorMessage) {
					alert('Error: ' + errorMessage);
				});
		}

		function listarMunicipios() {
            if ((prov = $('#provincia').val()) != '-selecciona-') {
                console.log($('#provincia').val())
				$.post("./cargaMunicipiosJSON.php", {
					provincia: prov
				})
					.done(function (datos) {
						var json = JSON.parse(datos);
						$("#municipio").children().remove();
						$.each(json, function (codigo, nombre) {
							$("#municipio").append(`<option value="${codigo}">${nombre}</option>`);
						});
					})
					.fail(function (request, errorMessage) {
						alert('Error: ' + errorMessage);
					});
			} else {
				$("#municipio").children().remove();
			}
		}

