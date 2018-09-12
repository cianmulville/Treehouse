(function ($) {

    $('#case-study').hide();
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.case-link a').bind('click', function(event) {
            var $anchor = $(this);
            $($anchor.attr('href')).show('slow');
            $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

})(jQuery);