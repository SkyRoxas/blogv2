(function ($) {
  // masonryHeight
  function masonryHeight () {
    var masonry = $('.masonry')
    if (masonry.children().innerWidth() !== masonry.width()) {
      masonry.css('max-height', '920px')
      masonry.parent().css({
        'position': 'relative',
        'overflow': 'hidden',
        'height': masonry.innerHeight() - 16
      })
      setTimeout(function () {
        masonry.parent().css({
          'position': 'relative',
          'overflow': 'hidden',
          'height': masonry.innerHeight() - 16
        })
      }, 1500)
    } else {
      masonry.css('max-height', 'none')
      masonry.parent().css({
        'position': 'relative',
        'overflow': 'auto',
        'height': 'auto'
      })
    }
  }

  $(document).ready(function () {
    setTimeout(function () {
      masonryHeight()
    }, 600)
  })

  $(document).ajaxComplete(function(){
    masonryHeight()
  })

  $(window).resize(function () {
    setTimeout(function () {
      masonryHeight()
    }, 1000)
  })
})(jQuery)
