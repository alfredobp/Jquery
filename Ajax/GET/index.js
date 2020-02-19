$(document).ready(function () {

    $.get("https://reqres.in/api/users", {page: 1}, function (response) {
        // console.log(response);
        response.data.forEach((element, index) => {
            console.log(element)
            $('#datos').append('<p>'+element.first_name+" "+element.last_name+'</p>');

            $('h3').append('<p>'+element.email+'</p>')
        });
    });


});

