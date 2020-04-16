console.log('ok');
console.log('jQuery OK -->', $);

$(document).ready( function() {

/************************************
 * 
 * TODO LIST 
 * 
 * Ricreare la todo list vista oggi durante la lezione (focus dell’esercizio la logica)
 * Usiamo i template in html e il clone per separare la parte logica (JS)
 *  dalla parte di markup (HTML)
 * recap funzionalità: 
 * mostrare, 
 * aggiungere
 * eliminare elementi dalla lista
 * 
 ************************************/

// Setup

// Ref funzionalità Incomplete task
var listStart = [
    'Corso - 9.30-15.00',
    'Esercizio',
    'Controllare Email',
    'Vincere al superenalotto'
]
var listContainer = $('.list-container');
var input = $('.input-section input');

// Ref funzionalità Completed task
var listContainerCompleted = $('.list-container_completed')

// Ref Data
var dateNow = new Date();
var day = '';
var month = '';
var dateContainer = $('.left-header .today-date');


// Aggiornare data corrente

// Switch per associare il giorno testuale al numerico
switch ( new Date().getDay() ) {
         case 0: 
             day = 'Sunday'
            break;
         case 1: 
             day = 'Monday'
             break;
         case 2: 
             day = 'Tuesday'
             break;
         case 3: 
             day = 'Wednesday'
             break;
         case 4: 
             day = 'Thursday'
             break;
         case 5: 
             day = 'Friday'
             break;
         case 6: 
             day = 'Saturday'
             break;
         default:
             day = false;
      };

// Switch per associare il mese testuale al numerico
switch ( new Date().getMonth() ) {
        case 0: 
            month = 'January'
           break;
        case 1: 
            month = 'February'
            break;
        case 2: 
            month = 'March'
            break;
        case 3: 
            month = 'April'
            break;
        case 4: 
            month = 'May'
            break;
        case 5: 
            month = 'June'
            break;
        case 6: 
            month = 'July'
            break;
        case 7: 
            month = 'August'
            break;
        case 8: 
            month = 'September'
            break;
        case 9: 
            month = 'October'
            break;
        case 10: 
            month = 'November'
            break;
        case 11: 
            month = 'December'
            break;
        default:
            month = false;
     };      
  
dateContainer.text(day + ', ' + month + ' ' + dateNow.getDate() );


//Popolazione Lista
for(var i = 0; i < listStart.length; i++) {
    //Cloniamo il template
    var listTaskClone = $('.template-task li').clone();
    
    //Inseriamo il testo
    listTaskClone.prepend(listStart[i]);
    
    //Inseriamo nella lista
    listContainer.append(listTaskClone);
};

// Andiamo al pannello "Completed Tasks" al click sul link
$('.right-header .completed-link').click(function(event) {

    if($('.completed-link').hasClass('active') == false) {
        $('.completed-link').addClass('active');
        $('.incomplete-link').removeClass('active');
        $('.todo-list').toggle();
        $('.todo-list_completed').toggle();
    };   
});

// Andiamo al pannello "Incomplete Tasks" al click sul link
$('.right-header .incomplete-link').click(function(event) {

    if($('.incomplete-link').hasClass('active') == false) {
        $('.incomplete-link').addClass('active');
        $('.completed-link').removeClass('active');
        $('.todo-list_completed').toggle();
        $('.todo-list').toggle();
    };   
});

// Cancellare elemento dalla lista con metodo ON()

$('body').on('click', '.todo-list ul li a.delete', function() {
    $(this).parent().parent().remove();
});

$('body').on('click', '.todo-list_completed ul li a.delete', function() {
    $(this).parent().parent().remove();
});

// Aggiungere elemento tramite input

// Cliccando il tasto Invio
$('.input-section input').keyup(function(event) {

    if(event.keyup == 13 || event.keyCode == 13) {
        //Cloniamo il template
        var listTaskClone = $('.template-task li').clone();
        //Inseriamo il testo
        listTaskClone.prepend(input.val());
        //Inseriamo nella lista
        listContainer.append(listTaskClone);
        //Puliamo il campo input
        input.val('')
    };
});

// Cliccando il Bottone "Add Task"
$('.input-section button').click(function(event) {
        //Cloniamo il template
        var listTaskClone = $('.template-task li').clone();
        //Inseriamo il testo
        listTaskClone.prepend(input.val());
        //Inseriamo nella lista
        listContainer.append(listTaskClone);
        //Puliamo il campo input
        input.val('')

});

// Click sull'elemento per renderlo completato

$('body').on('click', '.todo-list ul li a.complete', function() {
    var newTaskCompleted = $(this).parent().parent();
    $(this).html('<i class="fas fa-redo-alt"></i>')
    newTaskCompleted.addClass('completed')
    listContainerCompleted.append(newTaskCompleted);
    
});

// Click per rendere "incomplete" un elemento "completed"

$('body').on('click', '.todo-list_completed ul li  a.complete', function() {
    var newTaskIncomplete = $(this).parent().parent();
    $(this).html('<i class="far fa-check-circle"></i>')
    newTaskIncomplete.removeClass('completed')
    listContainer.append(newTaskIncomplete);
   
});

}); // <- End Doc Ready!