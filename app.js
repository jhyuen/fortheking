$(document).ready(function(){

    console.log("document ready");

    var height = $(window).height();
    var width = $(window).width();

    $("[page]").click(function () {
        $(".menu_button").removeClass("active");
        $(".page").removeClass("active");
        $(".subpage").removeClass("active");
        $(this).addClass("active");
        pageTo = $(this).attr("page");
        $(".page." + pageTo).addClass("active");
    });

    $("[subpage]").click(function () {
        $(".subpage").removeClass("active");
        subpageTo = $(this).attr("subpage");
        console.log(subpageTo)
        $(".subpage." + subpageTo).addClass("active");
    });

    $("body").mousemove(function(e) {
        var X = e.pageX - (width / 2);
        var Y = e.pageY - (height / 2);
        pageX = X/80;
        pageY = Y/80;
        bgX = X/40;
        bgY = Y/40;

        $(".page").css("transform", "translate(" + pageX + "px," + pageY + "px)");
        $(".page .background").css("transform", "translate(" + bgX + "px," + bgY + "px)");
    });
});