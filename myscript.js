// 1. When the DOM is ready, console.log the message "Let's get ready to party with jQuery!"
$(function () {
    console.log("Let's get ready to party with jQuery!")
});

// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center')
// 3. Remove the last paragraph in the article.
$('p:last-of-type').remove();
// 4. Set the font size of the title to be a random pixel size from 0 to 100.
$("#title").css('fontSize', '26px')
// 5. Add an item to the list; it can say whatever you want.
$('ol').append('<li> CHECO PEREZ IS SUPER PATIENT :3 </li>')
// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list's existence.
$("aside").empty();
$("aside").append('<p>Apparently the li was silly, and now we have to apologize for it. Loving the cute doggy.- &#x2665</p>')
// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('.form-control').on('change', function () {
    let red = $('.form-control')[0].value;
    let blue = $('.form-control')[1].value;
    let green = $('.form-control')[2].value;
    let rgbcolor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    $('body').css("background-color", rgbcolor);
})

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function () {
    this.remove();
})

