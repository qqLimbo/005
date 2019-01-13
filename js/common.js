//mgf

//clb



var api = $("#my-menu").data("mmenu");
api.bind('closed', function() {
    $('.toggle-mnu').removeClass('on');
});

$(".mobile-mnu").click(function() {
    var mmAPI = $("#my-menu").data("mmenu"),
        that = $(this).find(".toggle-mnu");
    that.toggleClass("on");
    $(".main-mnu").slideToggle();
    mmAPI.open();
    return false;
});

$(".service-item h4").equalHeights();
$(".new-item-text").equalHeights();
$(".link-item").equalHeights();



//SVG Fallback
if (!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
        return $(this).attr("src").replace(".svg", ".png");
    });
};

//E-mail Ajax Send


//Chrome Smooth Scroll
try {
    $.browserSelector();
    if ($("html").hasClass("chrome")) {
        $.smoothScroll();
    }
} catch (err) {

};

$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});