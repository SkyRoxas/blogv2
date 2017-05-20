(function ($) {
  // masonryHeight
  function masonryHeight () {
    var masonry = $('.masonry')
    if (masonry.children().innerWidth() !== masonry.width()) {
      masonry.css('max-height', '580px')
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
    masonryHeight()
  })

  $(window).resize(function () {
    setTimeout(function () {
      masonryHeight()
    }, 1000)
  })
  // imageHeight js
  function imageHeight () {
    if ($('.imageblock').height() < 500) {
      $('#banner').css('height', $('.imageblock').height())
    } else {
      $('#banner').css('height', '500')
    }
  }

  $(document).ready(function () {
    imageHeight()
  })

  $(window).resize(function () {
    imageHeight()
  })
})(jQuery)
