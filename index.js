
$.getJSON("https://javascriptst18.herokuapp.com/trending", function (result) {
    //$.each(result, function (i, field) {
    //  $("div").append(field + " ");
    //});

    $("#info").append(result.toString());
});


