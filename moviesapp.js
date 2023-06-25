$("form").on('submit', function (evt) {
    evt.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val();
    $('ul').append('<li>' + title + ', ' + rating + ' </li>')
    $('li').last().append('<button type ="button" class="remove-button">Remove</button>')
    $('.remove-button').on('click', function () {
        $(this).parent().remove();
    })
})
$('div').append('<button type ="button" onClick="sortListByName()" id="sortName">Sort by name</button>')
$('div').append('<button type ="button" onClick="sortListByRating()" id="sortRating">Sort by rating</button>')
//SORRY, RUNNING OUT OF TIME TO CREATE THE SORTING FUNCTIONS.