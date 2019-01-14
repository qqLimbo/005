$(function() {

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $('a[href=#callback]').click(function() {
        $('#callback .formname').val($(this).data('form'));
    });

    $(".top-line .sf-menu").superfish({
        cssArrows: false,
        hoverClass: 'newerUsedClass',
        delay: 300
    });

    //owl

    $(".next").click(function() {
        owl.trigger("next.owl.carousel");
    });

    $(".prev").click(function() {
        owl.trigger("prev.owl.carousel");
    });

    $(".sf-menu").after('<div id="my-menu">');
    $(".sf-menu").clone().appendTo("#my-menu");
    $("#my-menu").find('*').attr('style', '');
    $("#my-menu").find('ul').removeClass('sf-menu');
    $("#my-menu").mmenu({
        extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: "Меню"
        }
    });

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