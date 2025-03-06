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

    $("[link]").click(function () {
        var url = $(this).attr("link");
        var win = window.open(url);
        if (win) {
            //Browser has allowed it to be opened
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website');
        }
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