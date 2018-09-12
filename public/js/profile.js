(function ($) {
    /*
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });
    */
    var arrangeProfiles = function(){
        $('.profile-hidden').each(function(){
            if($(window).width() < 576) {
                var $target = $( '[data-target="#' + $(this).attr('id') + '"]').parent();
            }
            else if ($(window).width() < 991) {
                if($(this).attr('id') === 'profile1' | $(this).attr('id') === 'profile2') {
                    var $target = $('[data-target="#profile2"]').parent();
                }
                if($(this).attr('id') === 'profile3' | $(this).attr('id') === 'profile4') {
                    var $target = $('[data-target="#profile4"]').parent();
                }
                if($(this).attr('id') === 'profile5' | $(this).attr('id') === 'profile6') {
                    var $target = $('[data-target="#profile6"]').parent();
                }
                if($(this).attr('id') === 'profile7' | $(this).attr('id') === 'profile8') {
                    var $target = $('[data-target="#profile8"]').parent();
                }
            }
            else {
                if($(this).attr('id') === 'profile1' | $(this).attr('id') === 'profile2' | $(this).attr('id') === 'profile3' | $(this).attr('id') === 'profile4') {
                    var $target = $('[data-target="#profile4"]').parent();
                } else {
                    var $target = $('[data-target="#profile8"]').parent();
                }
            }
            $(this).insertAfter($target);
            //$(this).insertAfter( $( '[data-target="#' + $(this).attr('id') + '"]').parent());
            //$(this).insertAfter($(this).attr('#' + ))
            //$(this).insertAfter( $( '.profile[href$="' + $( this ).attr( 'id' ) + '"' ) );
        });
    };
    arrangeProfiles();
    $(window).resize(arrangeProfiles);
    $('.profile-hidden').hide();
    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.profile a').bind('click', function(event) {
            var $anchor = $(this);
            $('.profile-clicked').removeClass('profile-clicked');
            if($ ($anchor.attr('data-target')).css('display') === 'block') {
                $('.profile-hidden').hide('slow');
            }
            else {
            $('.profile-hidden').hide();
            $anchor.parent().addClass('profile-clicked');
            $($anchor.attr('data-target')).show('slow');
            $('html, body').stop().animate({
                        scrollTop: $anchor.offset().top
                    }, 1000, 'easeInOutExpo');
                    event.preventDefault();
            }
        });
    });

})(jQuery);