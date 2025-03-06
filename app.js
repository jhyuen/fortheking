$(document).ready(function(){

    console.log("document ready");

    var height = $(window).height();
    var width = $(window).width();

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    } else {
        isMobile = false;
    }

    // Page nav
    $("[page]").click(function () {
        $(".menu_button").removeClass("active");
        $(".page").removeClass("active");
        $(".subpage").removeClass("active");
        pageTo = $(this).attr("page");
        $(".page." + pageTo).addClass("active");
        $(".menu_button[page='"+ pageTo + "']").addClass("active");
    });

    // Subpage nav
    $("[subpage]").click(function () {
        $(".subpage").removeClass("active");
        subpageTo = $(this).attr("subpage");
        console.log(subpageTo)
        $(".subpage." + subpageTo).addClass("active");
    });

    // Link to other websites
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

    // Parallax
    if (!is_mobile) {
        $("body").mousemove(function(e) {
            var X = e.pageX - (width / 2);
            var Y = e.pageY - (height / 2);
            pageX = X/80;
            pageY = Y/80;
            bgX = X/40;
            bgY = Y/40;
            overlayX = X/100;
            overlayY = Y/100;
    
            $(".page").css("transform", "translate(" + pageX + "px," + pageY + "px)");
            $(".page .background").css("transform", "translate(" + bgX + "px," + bgY + "px)");
            $(".page .background_overlay").css("transform", "translate(" + overlayX + "px," + overlayY + "px)");
        });
    }
});