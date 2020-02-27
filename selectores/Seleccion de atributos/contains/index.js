$(document).ready(function () {
  
// $("p:nth-child(1):contains('lorem')").css("color","red").text("hola")
    
$(':header:nth-child(1)').css("color","yellow")
console.log($(":button:contains('Enviar')"));
  $('div:parent').css('color','red')
});

/**
 * 
    :button, :file, :radio, :reset : Para seleccionar cualquier tipo de botón (\ o con type=’button’) o el resto de elementos de esos tipos de un formulario.
    :submit, :text, :checkbok: Para los correspondientes tipos de inputs.
    :password, :image: Para los correspondientes tipos de inputs.
    :header: Para seleccionar cualquier tipo de etiqueta de cabecera (h1,h2, h3…)
    :hidden o :visible: Para seleccionar elementos ocultos o visibles.
    :parent: Aquellos elementos que tienen al menos un hijo dentro del árbol HTML.

    :eq(index) : Para seleccionar el elemento que está en la posición index de entre todos los seleccionados con el selector del que es sufijo. Actualmente está depreciado y se usa la función .eq() que ya ha sido tratada previamente.
    :has(“…) : Para elementos que contienen dentro al menos un elemento del selector que le paso como parámetro.
    :contains() : Todos los elementos que contienen un texto en concreto.
    :even o :odd : Para elementos que dentro del padre están en la posición para o impar. Son selectores depreciados pero siguen siendo muy usados.
    :input : Para seleccionar cualquier elemento de un formulario, ya sea un input, textarea,select o button.
    :gt(index) o :lt(index): Para seleccionar elementos cuya posición entre los elementos seleccionados es mayor(gt) o menor(lt) que la posición expresada en index.
    :first o :last : Para seleccionar el primero o el último de los elementos seleccionados por el sufijo selector. Están también depreciadas y en su lugar se usan las funciones .first() o .last() haciendo chaining.

 */