/**
 * Created by mohit on 2016-11-19.
 */


// window height
var windowHeight =  $(window).height;


function animateScrollTo (element) {
    $('body').animate({
        scrollTop: element.offset().top
    }, 2000);
}

$(document).ready(function () {


    // show more toggle to show over flown text with the show more button
    $('.show-more-toggle').click(function () {
        if($(this).text() == "Show more") {
            $(this).text('Show less');
            $(this).siblings('.show-more').show(600);
        } else {
            $(this).text('Show more');
            $(this).siblings('.show-more').hide(600);
            $('html,body').animate({
                scrollTop: $(this).parent().offset().top
            }, 600);
        }
    })




})

