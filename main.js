// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").

$(document).ready(function() {
    
    // creo una var vuota da richiamare dentro l'AJAX
    var array_dischi;

    // imposto e creo il templete handlebars da richiamre poi nella funzione
    var template_html = $('#template-handlebars').html();
    var template = Handlebars.compile(template_html);

	$.ajax({
        'url':'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data){
            // assegno, alla variabile creata sopra, il valore response di "data", che ha all'interno 10 oggetti dentro un array. quindi in definita mi estraggo un array con 10 oggetti.
            array_dischi = data.response;
            console.log(array_dischi);
            // creo una variabile uguale ad un oggetto vuoto.
            var disco1 = {};

            // con il ciclo for vado ad assegnare, ad ogni proprietà che creo dentro il mio oggetto vuoto, un valore che deve matchare con quello presente nei data che ho estratto prima. il mio ciclo for dura tanto quanto la lunghezza dell'array che ho estratto (quindi 10).
            for (var i = 0; i < array_dischi.length; i++) {
                // creo proprietà author, che sarà uguale a le keys/nomi "author" presenti dentro l'array che mi sono preso dall'ajax. faccio lo stesso procedimento per tutti le altre keys/nomi che mi interessa prendere
                disco1.author = array_dischi[i].author;
                disco1.title = array_dischi[i].title;
                disco1.year = array_dischi[i].year;
                disco1.poster = array_dischi[i].poster;
                disco1.genre = array_dischi[i].genre;

                // richiamo la funzione che mi permette di appendere, ad ogni singolo ciclo, l'oggetto che con le proprietà che ho estratto dall'array.
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

    // clicclando sul menu a tendina (select) assegno l'attributo "selected" alla voce che seleziono ogni volta. il click non funziona perchè il tag option non viene visto nell'HTML, va usato il "change".
    $('.custom-select').change(function(){
        // tolgo la classe main-visible a tutte le card visible
        $('.cds-container.containerx').removeClass('main-visible');

        // uso "option:selected" per assegnare l'atrtibuto "selected" all'option che vado a selezionare ogni volta. Quindi gli leggo il valore.
        var data_genere = $(this).children('option:selected').val();

        // faccio combaciare il valore che ho letto prima(che contiene il genere musicale), con l'attributo data-genere presente nel container, che avrà come valore il genere giusto perchè glie lo vado a mettere con handlebars a priori.
        $('.cds-container.containerx[data-genere="'+ data_genere +'"]').addClass('main-visible');
    });


});
