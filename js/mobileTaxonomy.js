(function($) {
    $(document).ready(function() {
        var windoWidth = $(window).width()
        if (windoWidth <= 576) {
            $('#bottom .categories-block').addClass('mobile-hide')
        } else if (windoWidth > 576) {
            $('#bottom .categories-block').removeClass('mobile-hide')
        }
        //<---resize--->
        $(window).resize(function() {
            var resizeWidth = $(window).width()
            if (resizeWidth <= 576) {
                $('#bottom .categories-block').addClass('responsive')
            } else if (resizeWidth > 576) {
                $('#bottom .categories-block').removeClass('responsive')
            }
        })
        //<---resize 結束--->
        $('.header-nav').click(function() {
            var windoWidth = $(window).width()
            if (windoWidth <= 576) {
                $('#bottom .categories-block').toggleClass('mobile-hide')
                $('#bottom .categories-block').css('position', 'fixed','z-index','9999')
            }
        })
    })
})(jQuery)
