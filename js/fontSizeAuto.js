(function ($) {
  function fontSizeAuto () {
    var fontSizeMax = 48

    var regionHeight = $('.block--textblock__01').innerHeight()
    var fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
    var fontSize = $('.block--textblock__01').find('.fontSizeAuto').css('font-size').replace('px', '')
    var realHeight = regionHeight - $('.avatar').innerHeight()

    function sizeUp () {
      while (fontHeight < realHeight) {
        fontSize = fontSize * 1.2
        $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSize)
        fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
      }
    }

    function sizeDown () {
      while (fontHeight > realHeight) {
        fontSize = fontSize * 0.8
        $('.block--textblock__01').find('.fontSizeAuto').css('font-size', fontSize)
        fontHeight = $('.block--textblock__01').find('.fontSizeAuto').innerHeight()
      }
    }

    var $window = $(window)

    var previousDimensions = {
      width: $window.width(),
      height: $window.height()
    }

    var timer

    $window.resize(function (e) {
      var newDimensions = {
        width: $window.width(),
        height: $window.height()
      }

      if (timer) {
        window.clearTimeout(timer)
      }

      timer = window.setTimeout(function () {
        if (newDimensions.width > previousDimensions.width) {
          sizeUp()
        } else {
          sizeDown()
        }

        // Store the new dimensions
        previousDimensions = newDimensions
      }, 100)
    })

    sizeDown()
  }

  $(document).ready(function () {
    fontSizeAuto()
  })
})(jQuery)
