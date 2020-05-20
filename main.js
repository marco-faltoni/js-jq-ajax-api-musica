// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:

// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").

$(document).ready(function() {
    var array_dischi;

	$.ajax({
        'url':'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data){
            array_dischi = data.response;
            console.log(array_dischi);
            var disco1 = {};
            for (var key in array_dischi[0]) {
                var valori = array_dischi[0][key];
                disco1.push(valori);
                console.log(disco1);
            }
        },
        'error': function() {
            alert('si è verificato un errore');
        },
    })






    // var template_html = $('#template-handlebars').html();
    // var template = Handlebars.compile(template_html);
    //
    // var data = {
    //     title : '',
    //     author : '',
    //     year : '',
    //     poster : '',
    // };
    //
    // var html = template(data);
    // $('.cds-container container').append('.cd');
    //
    // do {
    //     $('#box').append('.cd');
    // } while ($('.cd').length < 36);


});
