(function ($) {
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $('#case-study').hide();
        $(function() {
            $('.page-scroll a').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('data-target')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
            $('.case-link a').bind('click', function(event) {
                var $anchor = $(this);
                $($anchor.attr('data-target')).show('slow');
                $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('data-target')).offset().top
                    }, 1000, 'easeInOutExpo');
                event.preventDefault();
            });
        });
    
})(jQuery);