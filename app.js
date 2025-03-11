document.addEventListener("DOMContentLoaded", () => {
    // Call function to load the correct section on page load
    loadPageFromUrl();
    // Handle back/forward navigation
    window.addEventListener("popstate", () => {
        loadPageFromUrl();
    });
});

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
        pageTo = $(this).attr("page");
        setActivePage(pageTo);
    });

    // Subpage nav
    $("[subpage]").click(function () {
        subpageTo = $(this).attr("subpage");
        setActiveSubpage(subpageTo);
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
    if (!isMobile) {
        $("body").mousemove(function(e) {
            var X = e.pageX - (width / 2);
            var Y = e.pageY - (height / 2);
            pageX = X/80;
            pageY = Y/80;
            bgX = X/40;
            bgY = Y/40;
            overlayX = X/100;
            overlayY = Y/100;
    
            $(".page .background").css("transform", "translate(" + bgX + "px," + bgY + "px)");
            $(".page .background_overlay").css("transform", "translate(" + overlayX + "px," + overlayY + "px)");
            $(".page .background_color").css("transform", "translate(" + bgX + "px," + bgY + "px)");
            $(".page .page_content").css("transform", "translate(" + overlayX + "px," + overlayY + "px)");
        });
    }
});

function loadPageFromUrl() {
    // Get the page name from the URL (default to 'home' if empty)
    var loadPage = location.pathname.substring(1) || "home";
    console.log(location.pathname);
    console.log(location.pathname.substring);
    
    var pageIDs = [];

    // Get all page names
    $(".page").each(function(){
        pageIDs.push(this.id);
    });

    console.log(pageIDs);

    if (!pageIDs.includes(loadPage)) {
        loadPage = "home";
    }

    setActivePage(loadPage);
}

function setActivePage(page) {
    $(".menu_button").removeClass("active");
    $(".page").removeClass("active");
    $(".subpage").removeClass("active");
    targetPage = $(".page#" + page);
    targetPage.addClass("active");
    
    defaultSubpage = targetPage.attr("auto");
    if (defaultSubpage) {
        setActiveSubpage(defaultSubpage);
    }
    // Update lower menu
    $(".menu_button[page='"+ page + "']").addClass("active");

    // Change the URL without reloading the page
    history.pushState(null, '', page);
}

function setActiveSubpage(subpage) {
    $(".subpage").removeClass("active");
    $(".subpage#" + subpage).addClass("active");
}