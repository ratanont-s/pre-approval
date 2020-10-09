$(function () {

    function checkWidth() {
        var windowSize = $(window).width();

        if (windowSize <= 991) {
            console.log("screen width is less than 992");
            $('.navbar-nav a').on('click', function(){
                $('#navbarSupportedContent').collapse('toggle');
            })
        }
    }

    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    
    var scroll = new SmoothScroll('a[href*="#"]');

    $('.apply__nav a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        e.relatedTarget // previous active tab
        console.log(e.target);
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top -150
        }, 'slow');
    })
});