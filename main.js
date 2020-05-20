// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:

// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").

$(document).ready(function() {
    var array_dischi;
    var template_html = $('#template-handlebars').html();
    var template = Handlebars.compile(template_html);

	$.ajax({
        'url':'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data){
            array_dischi = data.response;
            console.log(array_dischi);
            var disco1 = {};

            for (var i = 0; i < array_dischi.length; i++) {
                disco1.author = array_dischi[i].author;
                disco1.title = array_dischi[i].title;
                disco1.year = array_dischi[i].year;
                disco1.poster = array_dischi[i].poster;
                disco1.genre = array_dischi[i].genre;
                handlebars(disco1);
            }
            console.log(disco1);
        },
        'error': function() {
            alert('si è verificato un errore');
        },
    })


    function handlebars(disco) {
        var html = template(disco);
        $('.disco').append(html);
    }

    $('.custom-select').change(function(){
        $('.cds-container.containerx').removeClass('main-visible');

        var data_genere = $(this).children('option:selected').val();

        $('.cds-container.containerx[data-genere="'+ data_genere +'"]').addClass('main-visible');
    });




    // var data = {
    //     title : '',
    //     author : '',
    //     year : '',
    //     poster : '',
    // };
    //

    //
    // do {
    //     $('#box').append('.cd');
    // } while ($('.cd').length < 36);


});
