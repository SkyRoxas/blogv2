(function ($) {
  // masonryHeight
  function masonryHeight () {
    var masonry = $('.masonry')
    if (masonry.children().innerWidth() !== masonry.width()) {
      masonry.css('max-height', '580px')
      masonry.parent().css({
        'position': 'relative',
        'overflow': 'hidden',
        'height': masonry.height() - 16
      })
      setTimeout(function () {
        masonry.parent().css({
          'position': 'relative',
          'overflow': 'hidden',
          'height': masonry.height() - 16
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
    masonryHeight()
  })

  $(window).resize(function () {
    setTimeout(function () {
      masonryHeight()
    }, 1000)
  })
})(jQuery)
