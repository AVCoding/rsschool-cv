$(document).ready(function(){
    var $status = $('.pagingInfo');
    var $slickElement = $('.community-slider');
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.html("<span>" + i + "</span>" + ' / ' + slick.slideCount);

    });

    $slickElement.slick({
        // infinite: true,
        // slidesToShow: 2,
        // slidesToScroll: 3
        infinite: false,
        speed: 300,
        prevArrow:$(".btn-prev"),
        nextArrow:$(".btn-next"),
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
        // centerPadding: '20px'
    });
});