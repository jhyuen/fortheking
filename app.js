$(document).ready(function(){
    
    console.log("document ready");

    var cardInner = $(".card_inner");
    var height = $(window).height();
    var width = $(window).width();

    cardInner.mousemove(function(e) {
        var pageX = e.pageX - (width / 2);
        var pageY = e.pageY - (height / 2);
        var xDeg = pageX / 30;
        var yDeg = pageY / 30;

        if ($(this).hasClass("active")) {
            $(this).css("transform", "rotateX(" + xDeg + "deg) rotateY(" + (180 + yDeg) + "deg)");
        } else {
            $(this).css("transform", "rotateX(" + xDeg + "deg) rotateY(" + yDeg + "deg)");
        }
    });
    cardInner.mouseout(function(e) {
        resetCard();
    });

    $(".flip_btn").click(function () {
        console.log("clicked flip button");
        cardInner.toggleClass("active");
        resetCard();
    });

    function resetCard () {  
        if (cardInner.hasClass("active")) {
            cardInner.css("transform", "rotateX(" + 0 + "deg) rotateY(" + 180 + "deg)");
        } else {
            cardInner.css("transform", "rotateX(" + 0 + "deg) rotateY(" + 0 + "deg)");
        }
    }
});